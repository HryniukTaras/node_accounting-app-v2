let users = [];

const getAll = () => {
  return users;
};

const getById = (id) => {
  return users.find((user) => String(user.id) === id) || null;
};

const create = (name) => {
  const user = {
    id: Math.trunc(Date.now() + Math.random()),
    name,
  };

  users.push(user);

  return user;
};

const remove = (id) => {
  users = users.filter((user) => String(user.id) !== id);
};

const update = ({ id, name }) => {
  const toUpdate = getById(id);

  Object.assign(toUpdate, { ...toUpdate, name });

  return toUpdate;
};

const clear = () => {
  users = [];
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
  clear,
};
