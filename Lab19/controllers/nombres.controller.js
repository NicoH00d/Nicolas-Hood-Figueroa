const bcrypt = require('bcryptjs');

exports.get_nombres= (request, response, next) => {
    response.render('nombre', { dato: null,
        username: request.session.username || '', 
        permisos: request.session.permisos || [],
        csrfToken: request.csrfToken(),
    
    });
};
exports.post_nombres= (request, response, next) => {
    const data = request.body.dato; // Suponiendo que los datos se envían en un campo llamado 'dato'
    response.setHeader('Set-Cookie', 'nombre=' + data);
    response.render('nombre', { dato: data,
        username: request.session.username || '', 
        permisos: request.session.permisos || [],
        csrfToken: request.csrfToken(),
    });
};