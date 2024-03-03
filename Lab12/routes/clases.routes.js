const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (request, response, next)=> {
  response.render('intro')
});

router.get('/gato', (request, response, next)=> {
  response.render('gato');
});

router.get('/historia', (request, response, next)=> {
  response.render('historia')
});

router.get('/nombre', (request, response, next)=> {
  response.render('nombre', { dato: null }); // Renderiza la vista 'nombre.ejs' sin ningún dato inicial
});

router.post('/nombre', (request, response, next)=> {
  const data = request.body.dato; // Suponiendo que los datos se envían en un campo llamado 'dato'
  response.render('nombre', { dato: data }); // Renderiza la vista 'nombre.ejs' con los datos ingresados por el usuario
});



module.exports = router;