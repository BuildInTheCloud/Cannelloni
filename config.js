/**
 * Created by Namdascious on 2/24/2015.
 * Name:        config.js
 * Description: Configuration settings file for Cannelloni
 */
var serverConfig = {
    devMode : true,
    dev : {
        connectionString : 'mongodb://localhost/Cannelloni',
        apiUrl : ''
    },
    test : {},
    prod : {}
}

module.exports = serverConfig;