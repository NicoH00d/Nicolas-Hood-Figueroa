const Coche = require('../models/coche.model');

exports.get_coches = (request, response, next) => {
    response.render('creacoche', {
        username: request.session.username || '',
    }
    
    );
};
exports.post_coches = (request, response, next) => {
    console.log(request.body);
    const mi_coche = new Coche(
        request.body.marca, request.body.modelo, request.body.motor,
        request.body.imagen
    );
    mi_coche.save();
    response.setHeader('Set-Cookie', 'ultimo_coche=' + mi_coche.modelo + '; HttpOnly');
    response.redirect('/');
};
exports.get_miscoches = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultimo_coche);
    response.render('miscoches', {
        username: request.session.username || '',
        ultimo_coche: request.cookies.ultimo_coche || '',
        coches: Coche.fetchAll(),
    });
};
