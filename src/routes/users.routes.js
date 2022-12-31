const { Router } = require('express');

const UsersContronller = require('../controllers/UsersController');
const usersController = new UsersContronller();

const usersRoutes = Router();

usersRoutes.post('/', usersController.create);

module.exports = usersRoutes;