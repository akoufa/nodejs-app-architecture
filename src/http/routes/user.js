const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ userService }) {
  router.get('/', asyncWrapper(async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
  }));

  return router;
}

module.exports.create = create;
