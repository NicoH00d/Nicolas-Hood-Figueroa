const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/sorpresa', (request, response, next)=> {
response.render('fotosgatos')
  });
module.exports = router;
