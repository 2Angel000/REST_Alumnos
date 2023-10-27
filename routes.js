module.exports = function (app, databaseService) {
  //get para leer
  app.get("/", (request, response) => {
    response.status(200).json({ mensaje: "todo OK!" });
  });

  app.get("/informacion", (request, response) => {
    response.json({ mensaje: "Alumno agregado" });
  });

  //post para agregar datos
  app.post("/informacion", (request, response) => {
    const { control, nombre, semestre } = request.body; // Obtener los valores de la solicitud {parser}
    console.log("============================================\n");
    console.log(
      "Estudiante:\n Matricula: " +
        control +
        "\n Nombre: " +
        nombre +
        "\n Semestre: " +
        semestre
    );
    databaseService
      .crearAlumno(control, nombre, semestre)
      .then(() => {
        response.json({
          mensaje: "Control agregado",
          estudiante: {
            control: control,
            nombre: nombre,
            semestre: semestre,
          },
        });
      })
      .catch((e) => {
        response.status(500).json(e);
      });
  });
};
