const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const nombrescontroller = require('../controllers/nombres.controller');
const iniciocontroller = require('../controllers/inicio.controller');
const isAuth = require('../util/is-auth');

router.get('/', isAuth, iniciocontroller.get_ini);
router.get('/gato', isAuth, iniciocontroller.get_gato);
router.get('/historia', isAuth, iniciocontroller.get_hist);

router.get('/nombre', isAuth, nombrescontroller.get_nombres);
router.post('/nombre', isAuth, nombrescontroller.post_nombres);

module.exports = router;