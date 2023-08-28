const response = require('./response.routes')


const errors = (err, req, res, next) => {
    console.error('[error]')

    const message = err.message || 'Error interno'
    const status = err.statusCode || 500

    response.error(req, res, message, status)
}
module.exports = errors