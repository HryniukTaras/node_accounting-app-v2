const usersService = require('../services/users.service');

const get = (req, res) => {
  res.status(200).send(usersService.getAll());
};

const getById = (req, res) => {
  const { id } = req.params;
  const user = usersService.getById(id);

  if (!user) {
    return res.sendStatus(404);
  }

  res.statusCode = 200;
  res.send(user);
};

const create = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.sendStatus(400);
  }

  const user = usersService.create(name);

  res.statusCode = 201;
  res.send(user);
};

const remove = (req, res) => {
  const { id } = req.params;

  if (!usersService.getById(id)) {
    return res.sendStatus(404);
  }

  usersService.remove(id);
  res.sendStatus(204);
};

const update = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!usersService.getById(id)) {
    return res.sendStatus(404);
  }

  if (!name) {
    return res.sendStatus(400);
  }

  const updated = usersService.update({ id, name });

  res.status(200).send(updated);
};

module.exports = {
  get,
  create,
  getById,
  remove,
  update,
};
