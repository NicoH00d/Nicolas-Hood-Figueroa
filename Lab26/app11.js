
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

const multer = require('multer');
//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'public/uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, Number(new Date()).toString() + file.originalname);
    },
});
app.use(multer({ storage: fileStorage }).single('imagen')); 

//Protección ataques de CSRF
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 

const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);
const rutasClases = require('./routes/clases.routes');
const rutasCoches = require('./routes/cars.routes');
app.use(rutasCoches);
app.use(rutasClases);

const rutasRoles = require('./routes/roles.routes')
app.use(rutasRoles);


app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname,'views','404.html')); //Manda la respuesta
});

// Monta el enrutador principal en la aplicación

app.listen(3000);
