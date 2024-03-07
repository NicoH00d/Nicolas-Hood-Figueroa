exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
    });
};
exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    const user = request.body.username; // Suponiendo que los datos se envían en un campo llamado 'username'
    response.setHeader('Set-Cookie', 'Usuario=' + user);//pq no sirve
    response.redirect('/');
};
exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};