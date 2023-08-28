require('dotenv').config();
const express = require('express');
const bodyParcer = require('body-parser')

const config = require('../config/config')
const router = require('./routes')

const app = express()

app.use(bodyParcer.json())

//rutas

app.use('/', router)

app.listen(config.cacheService.port, () => {
    console.log('Servicio Cache escuchando en el puerto', config.cacheService.port);
})