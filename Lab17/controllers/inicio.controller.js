exports.get_ini = (request, response, next) => {
    response.render('intro',{
        username: request.session.username || '',
    });
}
exports.get_gato = (request, response, next) => {
    response.render('gato',{
        username: request.session.username || '',
    });
}
exports.get_hist = (request, response, next) => {
    response.render('historia',{
        username: request.session.username || '',
    });
}