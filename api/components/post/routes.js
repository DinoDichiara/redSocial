const express = require("express");

const secure = require("./secure");
const response = require("../../../routes/response.routes");
const Controller = require("./index.js");

const router = express.Router();

// Routes
router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", upsert);

// function
function list(req, res, next) {
  Controller.list()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(next);
}

function get(req, res, next) {
  Controller.get(req.params.id)
    .then((post) => {
      response.success(req, res, post, 200);
    })
    .catch(next);
}

function upsert(req, res, next) {
  Controller.upsert(req.body)
    .then((post) => {
      response.success(req, res, post, 201);
    })
    .catch(next);
}

module.exports = router;
