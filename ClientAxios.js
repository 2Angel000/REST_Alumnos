const axios = require("axios");

const nuevoAlumno = {
  control: "19520301",
  nombre: "Angel Florencio",
  semestre: "9no",
};

IP = "localhost";
PORT = "3000";

//url server
const url = "http://" + IP + ":" + PORT + "/informacion";
console.log("conectado a: " + url);

axios
  .post(url, nuevoAlumno)
  .then((response) => {
    console.log("Datos insertados correctamente!", response.data);
  })
  .catch((error) => {
    console.error("Error al insertar datos: ", error);
  });
