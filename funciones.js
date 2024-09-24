function AnalizarFruta() {
  let frutas = {
    "manzana": {
      color: "rojo o verde",
      beneficios: "rica en fibra y vitamina C."
    },
    "plátano": {
      color: "amarillo",
      beneficios: "fuente de potasio y energía rápida."
    },
    "naranja": {
      color: "naranja",
      beneficios: "alta en vitamina C y antioxidantes."
    },
    "uva": {
      color: "morado o verde",
      beneficios: "buena para el corazón y rica en antioxidantes."
    },
    "fresa": {
      color: "roja",
      beneficios: "baja en calorías y rica en vitamina C."
    }
  };

  let fruta = prompt("Elige una fruta: manzana, plátano, naranja, uva o fresa").toLowerCase();

  if (frutas[fruta]) {
    alert("La " + fruta + " es de color " + frutas[fruta].color + " y es " + frutas[fruta].beneficios);
  } else {
    alert("No tengo información sobre esa fruta.");
  }
}

// Llamar a la función
AnalizarFruta();
