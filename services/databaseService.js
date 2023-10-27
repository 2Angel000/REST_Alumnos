require('dotenv').config();


const databaseService = () =>{
    console.log(`Connecting to database: ${process.env.DB_HOST}:${process.env.PORT} - ${process.env.DB}`);
    //para crear el cliente knex
    const knex = require('knex')({
        client: 'mysql',
        connection: {
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB,
            host: process.env.DB_HOST,
            port: process.env.PORT,
        }
    });

    const table = "alumnos";

    const getAlumno = () => {
        return knex(table).select();
    };


    const crearAlumno = (control, nombre, semestre) => {
        return knex(table).insert({
            control: control,
            nombre: nombre,
            semestre: semestre
        });
    }

    const eliminarAlumno = (alumnoId) =>{
        return knex(table).where({ id: alumnoId }).del();
    }

    const editarAlumno = (alumnoId, nuevoControl, nuevoNombre, nuevoSemestre) => {
        return knex(table)
            .where({ id: alumnoId })
            .update({
                control: nuevoControl,
                nombre: nuevoNombre,
                semestre: nuevoSemestre
            });
    };
    

    return {crearAlumno, getAlumno, eliminarAlumno, editarAlumno};
}

module.exports = {
    databaseService
}