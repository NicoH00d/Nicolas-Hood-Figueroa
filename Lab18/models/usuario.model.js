const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    //Constructor de la clase usuario
    constructor(mi_username, mi_nombre, mi_password) {
        this.username = mi_username;
        this.nombre = mi_nombre;
        this.password = mi_password;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12) //cantidad de veces q se cifra
        .then((password_cifrado) => {
            return db.execute(
                `INSERT INTO usuario (username, nombre, password) 
                VALUES (?, ?, ?)`, 
                [this.username, this.nombre, password_cifrado]);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    static fetchOne(username) {
        return db.execute('Select * from usuario WHERE username = ?', [username]);
    }
}