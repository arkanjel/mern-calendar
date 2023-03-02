const express = require('express');
require('dotenv').config();
const cors = require('cors')
const {dbConnection} = require('./database/config')



//Crear el servidor de express

const app = express();

//Base de datos
dbConnection()
//CORS

// app.use()
//Directorio publico 
app.use( express.static('public') )

//Lectura y parse del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
// eventos
app.use('/api/events', require('./routes/events'));

//Escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});