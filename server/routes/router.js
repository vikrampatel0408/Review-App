const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');


route.get('/', services.add_user);
route.get('/add-user', services.add_user)

route.post('/api/users', controller.create);

module.exports = route
