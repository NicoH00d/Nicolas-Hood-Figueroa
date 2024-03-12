const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const nombrescontroller = require('../controllers/nombres.controller');
const iniciocontroller = require('../controllers/inicio.controller');

router.get('/',iniciocontroller.get_ini);
router.get('/gato',iniciocontroller.get_gato);
router.get('/historia',iniciocontroller.get_hist);

router.get('/nombre', nombrescontroller.get_nombres);
router.post('/nombre', nombrescontroller.post_nombres);

module.exports = router;