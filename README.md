# DynamicMVCNode

Dynamic MVC Node is a node js server running by default on port 80 for http and port 81 for web services.

Dynamic MVC Node is built for ease of use for developers to not have to restart the server for controller changes.

Each Controller file is reloaded upon each HTTP request.  

Each request incorporates a REST implementation for each controller file.  

The following lists the requirements for each controller file.

	1.  All controller files must contain the following methods  (This example implements a controller called Root):

			module.exports.create = function () {
				var e = new Root();
				return e;
			}

			exports.index = function (req, res, postData, param) {
				res.end("Hello World");
			}

	2.  The Root Directory of the Server must contain a Root js file.

	3.  All Controllers other than Root must be contained within a sub directory with the same name as the controller.


REST Example HTTP Requests using 192.168.1.254 as the host:

http://192.168.1.254/    --This request will load the Root.js file and call the index function.

http://192.168.1.254/Person/   --This request will load the Person.js file and call the index function.

http://192.168.1.254/Person/read/1    --This request will load the Person.js file and call the read function and pass 1 as the param.


Dynamic MVC Node also provides a websocket connection defaulting on port 81.
Each controller method must follow the following contract:

	exports.callWebSocket = function (wss, ws, jsonObj) {
		var jsonResponse =  new Object();
		jsonResponse.message = "Person Node MVC";
		ws.broadcast(JSON.stringify(jsonResponse));
	}

In the example above is a controller method called callWebSocket.  The following describes the 3 parameters:

	1.  wss  --Web Socket Server Object.  This object primarily can be used to broadcast data to all connected clients using the wss.broadcast(data);
	2.  ws   --Web Socket Object.  This object is the single websocket connection.  Most common method used would be to respond to the client ws.send(data);
	3.  jsonObj  --This object is the jsonObject that was sent from the client.  Use this object to process your controller logic.

The websocket library is based from https://github.com/einaros/ws/.  To view the documentation for methods on the socket and socket server please view the doc/ws.md file.

The websocket api also requires a standard message to call a controller file and method.  The JSON object must contain the following 2 properties.

	1.  controller  --This is the controller that is to be loaded.  Value should be a string.
	2.  method  --This is the method that will be called from the controller file.  Value should be a string.

All other properties in the JSON object are for the programmer to use to process the method.


Dynamic MVC Node has 2 Modes.

	1.  Development
	2.  Production

Development mode dynamically reloads the controller file on every request.  This way a developer can continually change code on the fly without restarting the server.

Production mode only loads each controller file once the first request occurs.  An option still needs to be developed to send a request to the server to clear the 
controller cache for server updates.

To set to Production mode simply set the isDevelopment to false within the Server.js file.

var isDevelopment = false;
				

