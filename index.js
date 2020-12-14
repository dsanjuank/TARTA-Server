'use strict';

var path = require('path');
var http = require('http');
var net = require("net");

var oas3Tools = require('oas3-tools');
var serverPort = process.env.PORT || 8080;

// swaggerRouter configuration
var options = {
    controllers: path.join(__dirname, './controllers')
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
expressAppConfig.addValidator();
var app = expressAppConfig.getApp();

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

app.get("/", (req, res, next) => {
    res.json('wlcome to the app');
});

// Avaibility
setInterval(function(){ 
    console.log("Sending avaibility server");
    var socket = net.createConnection(2003, "carbon.hostedgraphite.com", function() {
        socket.write("a17d2a80-1dc6-4372-8edb-29a65eeec5ba.sla.avaibility 1\n");
        socket.end();
    });
}, 10000);

