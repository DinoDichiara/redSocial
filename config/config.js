require("dotenv").config();

module.exports = {
  env: process.env.NODE_ENV || "dev",
  remoteDB: process.env.REMOTE_DB,
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT
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
    host: process.env.MYSQL_SRV_HOST,
    port: process.env.MYSQL_SRV_3001
  }
};
