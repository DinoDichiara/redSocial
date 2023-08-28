require('dotenv').config();
const remote = require('./remote')
const config = require('../config/config')

module.exports = new remote(config.cacheService.host, config.cacheService.port)