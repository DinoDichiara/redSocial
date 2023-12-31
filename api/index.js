require("dotenv").config();
const express = require("express");

const swaggerUi = require("swagger-ui-express");

const config = require("../config/config");
const user = require("./components/user/routes");
const auth = require("./components/auth/routes");
const errors = require("../routes/error");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDoc = require("./swagger.json");

// ROUER
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, () => {
  console.log("Api escuchando en el puerto", config.api.port);
});
