const db = {
  user: [{ id: "1", name: "Dino" }],
};

const list = async (tabla) => {
  return db[tabla] || []
};

const get = async (tabla, id) => {
  const col = await list(tabla);
  return col.filter((item) => item.id === id)[0] || null;
};

const upsert = async (tabla, data) => {
  if (!data[tabla]) {
    db[tabla] = []
  }
  db[tabla].push(data);

  console.log(db);
};

const remove = (tabla, id) => true;

const query = async (tabla, q) => {
  const col = await list(tabla)
  const  keys = Object.keys(q)
  const key = keys[0] 
  return col.filter(item => item[key] === q[key]) [0] || null
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query
};
