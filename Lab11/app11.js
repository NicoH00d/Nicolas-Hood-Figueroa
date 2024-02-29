
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasClases = require('./routes/clases.routes');
const rutasGatos = require('./routes/cats.routes');
app.use('/gatos', rutasGatos);
app.use(rutasClases);




// Monta el enrutador principal en la aplicación

app.listen(3000);
