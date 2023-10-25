import requests

nuevoAlumno = {
    "control":"18520301",
    "nombre":"Julian",
    "semestre":"10mo",
}

IP = "localhost"
PORT = "3000"

#Server
url = f"http://{IP}:{PORT}/informacion"
print(f"Conectado a: {url}")

try:
    response = requests.post(url, json=nuevoAlumno)
    response.raise_for_status()

    print("Datos insertador correctamente!",response.json())
except requests.exceptions.RequestException as e:
    print(f"Error al insertar datos: {e}")


