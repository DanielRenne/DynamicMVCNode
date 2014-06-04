var fs = require('graceful-fs');
var http = require('http');
var url = require('url');
var util = require('util');
var formidable = require('formidable');

var isDevelopment = true;

var restCache = new Object();
var httpPort = 80;
var WebSocketServer = require('ws').Server, wss = new WebSocketServer({ port: 81 });
var webSocketClients = new Array();


wss.on('connection', function (ws) {
    webSocketClients.push(ws);
    ws.on('message', function (message) {
        try{
        var jsonObj = JSON.parse(message);
        var controller = jsonObj.controller;
        var method = jsonObj.method;
        if(isDevelopment){
            delete require.cache[require.resolve("./" + controller + "/" + controller)];
            restCache[controller + "/" + controller] = require("./" + controller + "/" + controller);
        }
        else{
            if(restCache[controller + "/" + controller] == undefined)
                restCache[controller + "/" + controller] = require("./" + controller + "/" + controller);
        }

        var fn = restCache[controller + "/" + controller][method];
        if(typeof fn === 'function') {
            fn(wss, ws, jsonObj);
        }
        else{
            var jsonResponse =  new Object();
            jsonResponse.error = method + " function not found";
            ws.send(JSON.stringify(jsonResponse));
        }


        }
        catch(ex){
            var jsonResponse =  new Object();
            jsonResponse.error = "Exception Occured During Message from Websocket:  " + ex;
            console.log("Exception Occured During Message from Websocket:  " + ex);
            ws.send(JSON.stringify(jsonResponse));
        }
    });
    ws.on('close', function (message) {
        for (var i = 0; i < webSocketClients.length; i++) {
            var sock = webSocketClients[i];
            if (ws.address == sock.address)
                webSocketClients.splice(i, 1);
        }
    });

});

wss.broadcast = function (data) {
    try{
        for (var i in webSocketClients)
            webSocketClients[i].send(data);
    }
    catch (ex) {

    }
};

console.log("Server running at " + httpPort);
http.createServer(function (req, res) {
        var request = url.parse(req.url, true);
        req.connection.setTimeout(0);
        var action = request.path;
        var postData = "";
        //res.setHeader("Connection", "close");

        req.on('data', function (chunk) {
            postData += chunk;
        });

        req.on('end', function () {
            try {
                if(req.url.contains(".")){
                    processHTTPFileRequest(action, res);
                }
                else{
                    var requestURL = req.url.replace(/%5C/g, "/").replace(/%20/g, " ").replace("/", '');;
                    fs.exists(requestURL, function(exists){

                        var dir = "";
                        var controllerFile = "Root";
                        var method = "index";
                        var param = "";


                        if(requestURL != ""){
                            var url = requestURL.split("/");
                            controllerFile = url[0];
                            dir = controllerFile;
                            if(url.length > 1)
                                method = url[1];
                            if(url.length > 2)
                                param = url[2];
                        }

                        try{
                            if(isDevelopment){
                                delete require.cache[require.resolve("./" + dir + "/" + controllerFile)];
                                restCache[dir + "/" + controllerFile] = require("./" + dir + "/" + controllerFile);
                            }
                            else{
                                if(restCache[dir + "/" + controllerFile] == undefined)
                                    restCache[dir + "/" + controllerFile] = require("./" + dir + "/" + controllerFile);
                            }

                            var fn = restCache[dir + "/" + controllerFile][method];
                            if(typeof fn === 'function') {
                                fn(req, res, postData, param);
                            }
                            else{
                                res.end(method + " function not found");
                            }
                        }
                        catch(ex){
                            console.log(ex);
                            res.writeHead(404, {"Content-Type": "text/plain"});
                            res.end("Controller File " + controllerFile + " not found");
                        }      
                    });
                }


            }
            catch(ex){

            }
        });


}).listen(httpPort);


function processHTTPFileRequest(action, res) {

    action = action.replace(/%5C/g, "/").replace(/%20/g, " ").replace("/", "");
    
    if (action == null || action == undefined || action == "")
        return;
    fs.readFile(action, function (err, data) {
        if (err) {
            console.log("File could not be opened for web request: " + err);
        }
        res.end(data, 'binary');
    });
    
}

String.prototype.contains = function (value) {
    if (this.indexOf(value) == -1)
        return false;
    else
        return true;
}

String.prototype.replaceAll = function (value, replacementValue) {
    return this.replace(new RegExp(value, "g"), replacementValue);
}