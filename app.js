//importando modulos
const { appendFile } = require("fs");
const { argv } = require("process");
const { modificarPersona } = require("./funciones.js");
const funciones   = require("./funciones.js")
const express = require("express");

const app = express();
let personas = funciones.abrirArchivo();
let parametro = process.argv[2];
switch(parametro){
    case "nuevo" :
        let newPpl = new funciones.NuevaPersona(argv[3], argv[4], argv[5], argv[6])
       funciones.armarArchivo(newPpl);
       console.log("\n****************")
       console.log("Entrada agregada")
       console.log("****************\n")
        break;
    case "modificar":
        let arrayActualizado = modificarPersona(argv[3], argv[4], argv[5], personas);
        funciones.escribirArchivo(arrayActualizado);
        break;

     case "borrar":
        let nuevoArray = funciones.borrarPersona(personas, argv[3]);
        funciones.escribirArchivo(nuevoArray);
        break;
    case undefined:
        console.log("\n***************************")
        console.log("Debes ingresar un parametro")
        console.log("***************************\n")
        break;
    case "listar":
        funciones.listarPersonas(personas);
        break
        default:
        console.log("\n*******************************************************************")
        console.log("La lista de comandos disponibles es: nuevo, borrar, listar, modificar")
        console.log("*******************************************************************\n")
        break;

}
app.listen(3000, () => console.log("Acaba de levantar el server en el puerto 3000"))
app.get("/", (req, res) => {
    res.send(personas)
})