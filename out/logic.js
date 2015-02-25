$traceurRuntime.options.symbols = true;
System.registerModule("../logic.js", [], function(require) {
  "use strict";
  var __moduleName = "../logic.js";
  var serverConfig = require('./config');
  var mongoose = require('mongoose');
  var morgan = require('morgan');
  var fs = require('fs');
  var backend = {
    authenticaton: {
      login: function() {},
      logout: function() {}
    },
    logic: {},
    services: {
      recipes: {
        addRecipe: function() {},
        getRecipes: function() {},
        getRecipe: function() {},
        saveRecipe: function() {}
      },
      settings: {
        addSetting: function() {},
        getSettings: function() {},
        getSetting: function() {},
        loadSettings: function() {},
        saveSettings: function() {}
      }
    }
  };
  module.exports = backend;
  return {};
});
System.get("../logic.js" + '');
