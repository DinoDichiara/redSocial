const express = require("express");

const response = require("../../../routes/response.routes");
const Controller = require("./index.js");

const router = express.Router();

router.post("/login", (req, res) => {
  Controller.login(req.body.username, req.body.password)
    .then((token) => {
      response.success(req, res, token, 200);
    })
    .catch((e) => {
      response.error(req, res, "informacion invalida", 400);
    });
});

module.exports = router;

