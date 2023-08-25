require("dotenv").config();

module.exports = {
  env: process.env.NODE_ENV || "dev",
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    db: process.env.MYSQL_DATABASE
  },
  mysqlService: {
    port: process.env.MYSQL_SRV_3001
  }
};
