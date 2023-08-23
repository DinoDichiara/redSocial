require("dotenv").config();
const jwt = require("jsonwebtoken");

const config = require("../config/config");
const error = require("../utils/error");

const secret = config.jwt.secret;

const sign = (data) => {
  return jwt.sign(data, secret);
};

const verify = (token) => {
  return jwt.verify(token, secret);
};

const check = {
  own: (req, owner) => {
    const decoded = decodeHeader(req);
    console.log(decoded);

    if (decoded.id !== owner) {
      throw error("You cant action this option", 401);
    }
  },
};

const getToken = (auth) => {
  if (!auth) {
    throw error("Token does not come", 401);
  }

  if (auth.indexOf("Bearer ") === -1) {
    throw error("Invalid format", 401);

  }

  const token = auth.replace("Bearer ", "");
  return token;
};

const decodeHeader = (req) => {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;

  return decoded;
};

module.exports = {
  sign,
  check,
};
