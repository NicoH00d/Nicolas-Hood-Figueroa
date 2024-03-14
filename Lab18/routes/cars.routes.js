const express = require('express');
const router = express.Router();
const path = require('path');

const isAuth = require('../util/is-auth');
const cochesController = require('../controllers/coches.controller');

router.get('/creacoche', isAuth, cochesController.get_coches);
router.post('/creacoche', isAuth, cochesController.post_coches);
router.get('/coches', isAuth, cochesController.get_miscoches);
router.get('/coches:coches_id', isAuth, cochesController.get_miscoches);

module.exports = router;
