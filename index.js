
let nombre = prompt ("Ingrese su nombre");
alert ("Bienvenido/a " +  nombre);

const notaEsInvalida = (nota) => (nota > 10 || nota < 0 || isNaN(nota));

const calculador = (suma, cantidad) => {
    return suma / cantidad;
}

let sumaNotas = 0;
let cantidadNotas = 0;

do {

    let nota;

    do {
        nota = parseFloat( prompt (nombre + ", ingresa una nota"));

        if (isNaN(nota)) alert ("El dato ingresado no corresponde con un valor numerico, intente otra vez.");

        if (nota > 10 || nota < 0) alert("La nota ingresada no puede ser mayor a 10 o menor que 0.")

    } while (notaEsInvalida(nota));

    sumaNotas += nota;
    cantidadNotas++;

} while (confirm("¿Queres seguir agregando notas?"));

let promedioNota = calculador (sumaNotas, cantidadNotas);
alert (nombre + ", el promedio de tus notas es " + promedioNota);