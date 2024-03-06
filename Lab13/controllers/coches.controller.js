const Coche = require('../models/coche.model');

exports.get_coches = (request, response, next) => {
    response.render('creacoche');
};
exports.post_coches = (request, response, next) => {
    console.log(request.body);
    const mi_coche = new Coche(
        request.body.marca, request.body.modelo, 
        request.body.imagen
    );
    mi_coche.save();
    response.redirect('/');
};
exports.get_miscoches = (request, response, next) => {
    response.render('miscoches', {
        coches: Coche.fetchAll(),
    });
};
