require('dotenv').config();
const remote = require('./remote')
const config = require('../config/config')

module.exports = new remote(config.mysqlService.host, config.mysqlService.port)