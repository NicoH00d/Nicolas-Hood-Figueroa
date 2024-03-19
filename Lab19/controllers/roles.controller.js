const db = require('../util/database');

exports.get_roles = ( async (request, res) => {
    try {
        const [users] = await db.query(`
            SELECT usuario.username, usuario.nombre, rol.nombre AS rol_nombre
            FROM usuario
            JOIN asigna ON usuario.username = asigna.username
            JOIN rol ON asigna.idrol = rol.idrol
        `);
        
        // Cambia la ruta de renderización a 'roles' en vez de '/roles'
        res.render('roles', { users, 
        username: request.session.username || '',
        permisos: request.session.permisos || [],
        
    });
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocurrió un error al obtener los usuarios');
    }
});

