const { nanoid } = require("nanoid");
const auth = require('../auth');

const TABLE = "post";

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
    const post = {
      title: body.title,
      user: body.user,
    };

    if (body.id) {
      post.id = body.id;
    } else {
      post.id = nanoid();
    }

    if (body.title || body.user) {
      await auth.upsert({
        id: post.id,
        title: post.title,
        user: body.user,
      });
    }
    return store.upsert(TABLE, post);
  };

  return {
    list,
    get,
    upsert,
  };
};