const { nanoid } = require("nanoid");
const auth = require("../auth");

const TABLE = "user";

module.exports = (injectedStore) => {
  const store = injectedStore;
  if (!store) {
    store = require("../../../db/dummy");
  }
  const list = () => {
    return store.list(TABLE);
  };

  const get = (id) => {
    return store.get(TABLE, id);
  };

  const upsert = async (body) => {
    const user = {
      name: body.name,
      username: body.username,
    };

    if (body.id) {
      user.id = body.id;
    } else {
      user.id = nanoid();
    }

    if (body.password || body.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: body.password,
      });
    }
    return store.upsert(TABLE, user);
  };

  return {
    list,
    get,
    upsert,
  };
};
