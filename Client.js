const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3310,
    database: "rest1"
});

// conectar la bd
connection.connect((err) =>{
    if(err){
        console.error("Error de conexión: ",err);
        return;
    }
    console.log("Conexión a MySQL establecida");
});

//inserción
const nuevoAlumno = {
    control: "21520002",
    nombre: "Juan",
    semestre: 3
};

const sql = 'INSERT INTO alumnos (control, nombre, semestre) values (?,?,?)';
connection.query(sql, [nuevoAlumno.control, nuevoAlumno.nombre, nuevoAlumno.semestre], (err, results)=>{
    if(err){
        console.log("Error al insertar",err);
    }else{
        console.log("Datos insertados :D");
    }
});

connection.end();