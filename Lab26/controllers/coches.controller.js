const Coche = require('../models/coche.model');

exports.get_coches = (request, response, next) => {
    response.render('creacoche', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    }
    
    );
};
exports.post_coches = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const mi_coche = new Coche(
        request.body.marca, request.body.modelo, request.body.motor,
        request.file.filename
    );
    mi_coche.save()
    .then(([rows, fieldData]) => {
        response.setHeader('Set-Cookie', 'ultimo_coche=' + mi_coche.modelo + '; HttpOnly');
        response.redirect('/coches');
    }).catch((error) => {
        console.log(error);

    });    
    
};

exports.get_miscoches = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultimo_coche);

    Coche.fetch(request.params.coches_id).then(([rows, fieldData]) => {
        console.log(rows);
        response.render('miscoches', {
            coches: rows,
            username: request.session.username || '',
            ultimo_coche: request.cookies.ultimo_coche || '',
            permisos: request.session.permisos || [],
        });
    })
    .catch((error) => {
        console.log(error)
    });
};
