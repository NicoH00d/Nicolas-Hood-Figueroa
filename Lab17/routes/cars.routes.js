const express = require('express');
const router = express.Router();
const path = require('path');

const cochesController = require('../controllers/coches.controller');

router.get('/creacoche', cochesController.get_coches);
router.post('/creacoche', cochesController.post_coches);
//router.get('/:coches_id', cochesController.get_miscoches);
router.get('/coches', cochesController.get_miscoches);

module.exports = router;
