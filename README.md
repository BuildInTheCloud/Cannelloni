# Cannelloni
IoT project documentation &amp; recipes web app

Description
========
IoT Cannelloni is a WIP web application used to document and store the BITC's recipes for the IoT projects it explores and implements
 
Install
=======
1. Clone the repo somewhere on your machine

Config
======
Cannelloni is being built to run with mongodb as it's data store. You can use any document/RDBMS as it's store, as long as you make sure your documents/entities adhere to defined data structures wthin the application. It's easier to just create a "Cannelloni" document db within mongo and go from there

Running in Development Mode
===========================
1. Make sure the flag within config.js settings is set to "devMode" : true (this isn't being used yet, and might change as development progresses
2. run server.js
3. Access local host on listening port


Most of code pushed are just stubs. More to be added in upcoming weeks...
