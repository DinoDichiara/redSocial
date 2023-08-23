const { createPool } = require('mysql2')

const config = require('../config/config')


const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.db
  };
  
  let connection;
  
  function connectDB() {
    connection = createPool(dbconf);
    console.log('DB mysql Connected! no problem');
  }

connectDB()

const list = (table) => {
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}
const get = (table, id) => {
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id=${id}`, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

const insert = (table, data) => {
    return new Promise( (resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

const update = (table, data) => {
    return new Promise( (resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

const upsert = (table, data, isNew) => {
    if(data && isNew){
        return insert(table, data);
    }else{
        return update(table, data);
    }
}

module.exports = {
    list,
    get,
    upsert
}