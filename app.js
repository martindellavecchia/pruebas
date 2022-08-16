const { argv } = require("process");
let funciones   = require("./funciones.js")
let personas = funciones.abrirArchivo();
let parametro = process.argv[2];
switch(parametro){
    case "nuevo" :
        let newPpl = new funciones.NuevaPersona(argv[3], argv[4], argv[5], argv[6])
       funciones.armarArchivo(newPpl);
        break;
    case "borrar":
        let nuevoArray = funciones.borrarPersona(personas, argv[3]);
        funciones.escribirArchivo(nuevoArray);
        break;
        
}