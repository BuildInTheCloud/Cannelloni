/**
 * Created by Namdascious on 2/24/2015.
 * Name:        logic.js
 * Description: Server-side logic layer module for Cannelloni
 */

var serverConfig = require('./config');
var mongoose = require('mongoose');
var morgan = require('morgan');
var fs = require('fs');

//mongoose.connect(serverConfig.dev.connectionString);

var backend = {
    authenticaton:{
        login: function(){},

        logout: function(){}
    },

    logic: {

    },

    services:{
        recipes :{
            addRecipe : function(){},

            getRecipes : function(){},

            getRecipe : function (){},

            saveRecipe : function(){}
        },

        settings : {
            addSetting : function(){},

            getSettings : function(){},

            getSetting : function(){},

            loadSettings : function(){},

            saveSettings : function(){}
        }
    }
};

module.exports = backend;