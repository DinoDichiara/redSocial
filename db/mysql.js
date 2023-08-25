const { createPool } = require("mysql2");

const config = require("../config/config");

const dbconf = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.db,
};

let connection;

function connectDB() {
  connection = createPool(dbconf);
  console.log("DB mysql Connected! no problem");
}

connectDB();

const list = (table) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
const get = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id=${id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const insert = (table, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
// const upsert = (table, data) =>{
//   return insert(table, data)
//   };
const update = (table, data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${table} SET ? WHERE id=?`,
      [data, data.id],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};

const upsert = async (table, payload) =>
  new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`,
      [payload, payload],
      (error, data) => {
        if (error) {
          return reject(error);
        }
        resolve(data);
      }
    );
  });

function query(table, query, join) {
  let joinQuery = "";
  if (join) {
    const key = Object.keys(join)[0];
    const val = join[key];
    joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
  }

  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} ${joinQuery} WHERE ?`, query, (err, res) => {
      if (err) return reject(err);
      resolve(res || null);
    });
  });
}

module.exports = {
  list,
  get,
  upsert,
  query,
};
