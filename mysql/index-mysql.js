const express = require('express');
const bodyParcer = require('body-parser')

const config = require('../config/config')
const router = require('./routes')

const app = express()

app.use(bodyParcer.json())

//rutas

app.use('/', router)

app.listen(config.mysqlService.port, () => {
    console.log('Servicio Mysql escuchando en el puerto', config.mysqlService.port);
})