const express = require("express");

const response = require("../../../routes/response.routes");
const Controller = require("./index.js");

const router = express.Router();

router.post("/login", (req, res, next) => {
  Controller.login(req.body.username, req.body.password)
    .then((token) => {
      response.success(req, res, token, 200);
    })
    .catch(next);
});

module.exports = router;

