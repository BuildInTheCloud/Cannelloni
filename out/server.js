$traceurRuntime.options.symbols = true;
System.registerModule("../server.js", [], function(require) {
  "use strict";
  var __moduleName = "../server.js";
  var serverConfig = require('./config');
  var backend = require('./logic');
  var express = require('express');
  var mongoose = require('mongoose');
  var morgan = require('morgan');
  var bodyParser = require('body-parser');
  var methodOverride = require('method-override');
  var multipart = require('connect-multiparty');
  var multipartMiddleware = multipart();
  var app = express();
  var sys = require('util'),
      fs = require('fs'),
      rest = require('./node_modules/restler');
  fs.readFile('./server_init.json', function(err, data) {});
  mongoose.connect(serverConfig.dev.connectionString);
  app.use(express.static(__dirname + '/www'));
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({'extended': 'true'}));
  app.use(bodyParser.json());
  app.use(bodyParser.json({type: 'application/vnd.api+json'}));
  app.use(methodOverride());
  app.get('*', function(req, res) {
    res.sendfile('./www/index.html');
  });
  app.listen(3000);
  console.log("App listening on port 3000");
  return {};
});
System.get("../server.js" + '');
