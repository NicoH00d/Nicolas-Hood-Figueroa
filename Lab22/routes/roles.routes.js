const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');
const canAdmin = require('../util/canAdmin');

const rolesController = require('../controllers/roles.controller');
router.get('/roles', isAuth, canAdmin, rolesController.get_roles)

module.exports = router;
