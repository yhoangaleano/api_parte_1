'use strict'

//Cargar a express
var express = require("express");

//Cargar Body-Parser
var bodyParser = require("body-parser");

//Instancia de express
var app = express();

//Configuramos las imagenes
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true
}));

//Configuramos los json
app.use(bodyParser.json({
    limit: "50mb"
}));

//Middleware para los CORS (Control de Acceso HTTP)
app.use((req, res, next) => {
    // Accesos a todos los dominios
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    res.header("Allow", "GET, POST, PUT, DELETE, PATCH");
    next();
});

app.get("/prueba", function(req, res){

    res.status(200).send({
        mensaje: "Bienvenido al API"
    });

});

module.exports = app;