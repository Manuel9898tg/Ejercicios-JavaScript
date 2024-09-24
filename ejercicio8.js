let num1 = parseFloat(prompt("Digite su primer número"));
let num2 = parseFloat(prompt("Digite su segundo número"));
let ope = parseInt(prompt("Elige qué símbolo quieres: sumar 1, restar 2, multiplicar 3 o dividir 4"));

switch (ope) {
    case 1:
        alert(num1 + num2);
        break;
    case 2:
        alert(num1 - num2);
        break;
    case 3:
        alert(num1 * num2);
        break;
    case 4:
         alert(num1 / num2);      
    default:
        alert("Operación no válida.");
        break;
}