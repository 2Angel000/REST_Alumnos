const axios = require("axios");
const { databaseService } = require("./services/databaseService");
const { error } = require("console");

const leer = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const db = databaseService();

const menu =
  "\n[1] - Visualizar datos de la BD\n[2] - Insertar datos" +
  "\n[3] - Eliminar un registro por ID\n[4] - Editar\n[5] - Salir";

const mostrarMenu = () => {
  console.log("\nMenú:" + menu);

  leer.question("Elija una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        db.getAlumno()
          .then((alumnos) => {
            console.log("\t\tDatos de la BD:\n");
            console.log(alumnos);
            mostrarMenu();
          })
          .catch((error) => {
            console.error("Error: ", error);
            mostrarMenu();
          });
        break;
      case "2":
        console.log("=============== Agregar Alumnos ==================");
        leer.question("Ingrese el número de control: ", (control) => {
          leer.question("Ingrese el nombre: ", (nombre) => {
            leer.question("Ingrese el semestre: ", (semestre) => {
              db.crearAlumno(control, nombre, semestre)
                .then(() => {
                  console.log("OK!. Datos agregados");
                  mostrarMenu();
                })
                .catch((error) => {
                  console.error("Error al insertar\n", error);
                  mostrarMenu();
                });
            }); //semestre
          }); //nombre
        }); //control
        break;
      case "3":
        console.log("=============== Eliminar Alumno ==================");
        leer.question("Ingrese el ID del alumno a eliminar: ", (alumnoId) => {
            db.eliminarAlumno(alumnoId)
            .then(() => {
                console.log(`Alumno con ID ${alumnoId} eliminado correctamente.`);
                mostrarMenu();
            })
            .catch((error) => {
                console.error(`Error al eliminar al alumno con ID ${alumnoId}:`, error);
                mostrarMenu();
            });
        });
        break;
        case '4':
            console.log("=============== Editar Alumno ==================");
            leer.question("Ingrese el ID del alumno a editar: ", (alumnoId) => {
                // Solicitar los nuevos datos del alumno
                leer.question("Nuevo número de control: ", (nuevoControl) => {
                    leer.question("Nuevo nombre: ", (nuevoNombre) => {
                        leer.question("Nuevo semestre: ", (nuevoSemestre) => {
                            db.editarAlumno(alumnoId, nuevoControl, nuevoNombre, nuevoSemestre)
                                .then(() => {
                                    console.log(`Alumno con ID ${alumnoId} editado correctamente.`);
                                    mostrarMenu();
                                })
                                .catch((error) => {
                                    console.error(`Error al editar al alumno con ID ${alumnoId}:`, error);
                                    mostrarMenu();
                                });
                        });
                    });
                });
            });
            break;
      case '5':
        leer.close();  
        break;
      default:
        console.log("Opción no válida");
        mostrarMenu();
    }
  });
};

mostrarMenu();
