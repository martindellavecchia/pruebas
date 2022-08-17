let fun = {

    NuevaPersona: function (nombre, apellido, dni, colorFavorito) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.colorFavorito = colorFavorito;
    },

    borrarPersona : function (arrayPersonas, dni) {
        let nuevoArray = arrayPersonas.filter(function(elemento){
            return elemento.dni != dni;
        }) 
        return nuevoArray;
    },
    
    buscarPorDNI: function (dni, arrayPersonas) {
        let persona = arrayPersonas.find(function (elemento) {
            return elemento.dni == dni;
        })
        return persona;
    },
    modificarPersona: function(cualquierClave, suValor, dni, arrayPersonas){
        let per = fun.buscarPorDNI(dni, arrayPersonas);
        per[`${cualquierClave}`] = suValor;
        console.log(per);
        

    },
    listarPersonas : function (lista){
        console.log("\n*************** Lista de personas *************************")
        lista.forEach(function (elemento){
            console.log(`Nombre y apellido: ${elemento.nombre}, ${elemento.apellido}`);
        })
    },

    abrirArchivo: function () {
        let fs = require("fs")
        let per = fs.readFileSync("./archivo.json", "utf-8")
        let personas = JSON.parse(per);
        return personas;
    },

    escribirArchivo: function (datos) {
        let fs = require("fs");
        let archivoParaEscribir = JSON.stringify(datos, null, " ")
        fs.writeFileSync("./archivo.json", archivoParaEscribir, "utf-8")
    },

    armarArchivo: function (persona) {
        let archivoOriginal = this.abrirArchivo();
        archivoOriginal.push(persona);
        this.escribirArchivo(archivoOriginal);

    }

};
module.exports = fun;
