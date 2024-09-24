let Deportes = {
  "Estados Unidos": "Béisbol",
  "Brasil": "Fútbol",
  "Canadá": "Hockey sobre hielo",
  "España": "Fútbol",
  "Japón": "Béisbol"
};

let pais = prompt("Elige un país y te diré cuál es el deporte más popular ahí");

if (Deportes[pais]) {
  alert("El deporte más popular en " + pais + " es: " + Deportes[pais]);
} else {
  alert("No tengo información sobre el deporte en ese país.");
}
