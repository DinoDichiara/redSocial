const store = require("../../../db/mysql");

const ctrl = require("./controller");

module.exports = ctrl(store);
