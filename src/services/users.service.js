const { v4: uuid } = require('uuid');

let users = [];

const getAll = () => {
  return users;
};

const getById = (id) => {
  return users.find((user) => String(user.id) === id) || null;
};

const create = (name) => {
  const user = {
    id: uuid(),
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

  if (toUpdate !== null) {
    Object.assign(toUpdate, { ...toUpdate, name });
  }

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
