const db = require('../util/database');


//const coches = [
//    {
//        marca: "Ferrari", 
//        modelo: "F40", 
//        motor: "V8",
//        imagen: "https://hips.hearstapps.com/hmg-prod/images/1991-ferrari-f40-103-1593201414.jpg", 
//    },{
//        marca: "Nissan", 
//        modelo: "GTR R34", 
//        motor: "V6 unknown",
//        imagen: "https://images-cdn.ubuy.co.in/44AGQ1C-tst-innoprint-co-nissan-skyline-r34-gt-r.jpg", 
//    }
//];

module.exports = class Coche {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_marca, mi_modelo, mi_motor, mi_imagen) {
        this.marca = mi_marca;
        this.modelo = mi_modelo;
        this.motor = mi_motor;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            `INSERT INTO coches (marca, modelo, motor, imagen)
            VALUES(?, ?, ?, ?)`,
            [this.marca, this.modelo, this.motor, this.imagen]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('Select * from coches')
    }
    static fetch(id){
    if(id){
        return this.fetchOne(id);
    } else {
        return this.fetchAll();
        }
    }
    static fetchOne(id) {
        return db.execute('Select * from coches WHERE id = ?', [id]);
    }

}