
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

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);
const rutasClases = require('./routes/clases.routes');
const rutasCoches = require('./routes/cars.routes');
app.use(rutasCoches);
app.use(rutasClases);



app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname,'views','404.html')); //Manda la respuesta
});

// Monta el enrutador principal en la aplicación

app.listen(3000);
