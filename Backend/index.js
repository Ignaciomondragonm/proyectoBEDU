require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// *********************BASE PROYECTO****************************
const path = require('path');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );
app.use( express.json() );

// Base de datos
dbConnection();

app.use( '/api/craigslists', require('./routes/craigslists') );



app.listen( process.env.PORT , () => {
    console.log('Servidor corriendo en el puerto: ' + process.env.PORT);
});

