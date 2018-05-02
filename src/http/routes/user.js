const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ userService }) {
  router.get(
    '/',
    asyncWrapper(async (req, res) => {
      const users = await userService.getAllUsers();
      res.json(users);
    }),
  );

  // TODO: Install middleware to validate the input
  router.post(
    '/',
    asyncWrapper(async (req, res) => {
      const user = req.body;
      await userService.createUser(user);
      // TODO: Fix the response
      res.json({});
    }),
  );

  return router;
}

module.exports.create = create;
