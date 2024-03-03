
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); //motor que va a generar nuestro codigo
app.set('views', 'views');

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasClases = require('./routes/clases.routes');
const rutasGatos = require('./routes/cats.routes');
app.use(rutasGatos);
app.use(rutasClases);



app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname,'views','404.html')); //Manda la respuesta
});

// Monta el enrutador principal en la aplicación

app.listen(3000);
