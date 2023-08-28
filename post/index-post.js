require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser')


const config = require("../config/config");
const post = require("./components/post/routes");
const errors = require("../routes/error");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUER
app.use("/api/post", post);

app.use(errors)

app.listen(config.post.port, () => {
  console.log("Servicio Post escuchando en el puerto", config.post.port);
});
