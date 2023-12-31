const bcrypt = require('bcryptjs')
const auth = require("../../../auth");

const TABLE = "auth";

module.exports = (injectedStore) => {
  const store = injectedStore;
  if (!store) {
    store = require("../../../db/dummy");
  }

  const login = async (username, password) => {
    const data = await store.query(TABLE, { username: username });

    return bcrypt.compare(password, data.password).then((equal) => {
      if (equal === true) {
        return auth.sign(data); //generamos Token
      } else {
        throw new Error("Informacion invalida");
      }
    });
  };

  const upsert = async (data) => {
    const authData = {
      id: data.id,
    };
    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }

    return store.upsert(TABLE, authData);
  };

  return {
    login,
    upsert,
  };
};
