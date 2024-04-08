const express = require('express');
const router = express.Router();
const path = require('path');

const isAuth = require('../util/is-auth');
const cochesController = require('../controllers/coches.controller');
const canView = require('../util/canView');
const canCreate = require('../util/canCreate');

router.get('/creacoche', isAuth, canCreate, cochesController.get_coches);
router.post('/creacoche', isAuth, canCreate, cochesController.post_coches);
router.get('/coches', isAuth, canView, cochesController.get_miscoches);
router.get('/coches:coches_id', isAuth, canView, cochesController.get_miscoches);

module.exports = router;
