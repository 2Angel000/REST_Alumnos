1. Iniciar el Json
    npm init
    
2. Instalar librerias:
    npm i express
    npm i body-parser
    npm i mysql
    npm i knex      : para escribir mysql desde js
    npm install dotenv      : para controlar variables de entorno

3. Crear base de datos "rest1"
    create database rest1;
    use rest1;
    create table alumnos (control int(8) auto_increment primary key, nombre varchar(20), semestre varchar(20));
    
    Reiniciar a 0
    ALTER TABLE alumnos AUTO_INCREMENT = 0;

4. Cliente en JS
    npm install mysql2

5.  Client con AXIOS
    npm install axios

6. Cliente Heterogeneo {Python}
    pip install requests  



