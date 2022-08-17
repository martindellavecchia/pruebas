const arrayPersonas = [
    {
      nombre: "juan",
      apellido: "Chim",
      dni: 12312311,
      colorFavorito: "rosa",
      campo: "antonio"
    },
    {
      nombre: "Augusto",
      apellido: "Surango",
      dni: 54000001,
      colorFavorito: "rojo"
    },
    {
      nombre: "Fausto",
      apellido: "Romero",
      dni: 58000002,
      colorFavorito: "azul"
    }
  ];
  
  const buscarPorDNI = (dni, arrayPersonas) => {
    let persona = arrayPersonas.find(function (elemento) {
      return elemento.dni === dni;
    });
    return persona;
  };
  
  const modificarPersona = (atributo, nuevoValor, dni, arrayPersonas) => {
    let per = buscarPorDNI(dni, arrayPersonas);
    per[`${atributo}`] = nuevoValor; // esta sintaxis se puede mejorar, está medio rara
  };


  //nos vimosssss
  
  modificarPersona("apellido", "Della Vecchia", 58000002, arrayPersonas);
  
  console.log(arrayPersonas);