var fs = require('graceful-fs');

var Variables = function () {
}

//Public Methods
module.exports.create = function () {
    var e = new Person();
    return e;
}

exports.index = function (req, res, postData, param) {

    fs.readFile("Person/Views/index.html", function (err, data) {
        if(err)
            res.end(err.message);
        
        res.end(data, 'binary');
    });
}

exports.callWebSocket = function (wss, ws, jsonObj) {
    var jsonResponse =  new Object();
    jsonResponse.message = "Person Node MVC";
    wss.broadcast(JSON.stringify(jsonResponse));
}
