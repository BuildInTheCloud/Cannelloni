$traceurRuntime.options.symbols = true;
System.registerModule("../config.js", [], function(require) {
  "use strict";
  var __moduleName = "../config.js";
  var serverConfig = {
    devMode: true,
    dev: {connectionString: "mongodb://localhost/Cannelloni"},
    test: {},
    prod: {}
  };
  module.exports = serverConfig;
  return {};
});
System.get("../config.js" + '');
