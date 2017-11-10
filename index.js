'use strict'

//Importar la configuación de APP
var app = require("./app");

//Configuracion del puerto y el host
var port = process.env.PORT || 3977;
var host = process.env.HOST || '127.0.0.1';

//Creamos el servidor
var server = app.listen(port, host, function(){

    console.log("Estas conectado al servidor: " + host + " por el puerto: " + port);

});
