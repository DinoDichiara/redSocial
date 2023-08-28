const config = require('../../../config/config')

if (config.remoteDB === true) {
    store = require("../../../db/remote-mysql");
} else {
    store = require("../../../db/mysql");
}

const ctrl = require("./controller");

module.exports = ctrl(store);
