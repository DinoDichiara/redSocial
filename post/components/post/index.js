const store = require("../../../db/remote-mysql");

const ctrl = require("./controller");

module.exports = ctrl(store);
