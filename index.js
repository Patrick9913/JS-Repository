
class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }
}

class Alumno extends Persona {
    constructor (nombre, edad, dni) {
        super(nombre, edad),
        this.dni = dni
    }
    monstrarAlumno() {
        alert (`Nombre: ${this.nombre} Edad: ${this.edad} DNI: ${this.dni}`);
    }
}

class Profesor extends Persona {
    constructor (nombre, edad, profesion) {
        super(nombre,edad),
        this.profesion = profesion
    }
    mostrarProfesor() {
        alert (`Nombre: ${this.nombre}  Edad: ${this.edad}  Profesión: ${this.profesion}`);
    }
}

let opcionIngresada = 0;

const alumnos = [

    new Alumno ("JUAN PÉREZ", 18, 20345678),
    new Alumno ("MARÍA GARCÍA", 20, 30456789),
    new Alumno ("CARLOS LÓPEZ", 19, 40567890),
    new Alumno ("ANA MARTÍNEZ", 21, 50678901),
    new Alumno ("LUIS RODRIGUEZ", 22, 60789012)

];

const profesores = [];

do {
    
    opcionIngresada = parseInt (prompt(" 1 - Alumnos \n 2 - Profesores \n 3 - Salir"));

    switch (opcionIngresada) {

        case 1:
            
            let = opcionAlumnos = 0;

            do {
                
                opcionAlumnos = parseInt( prompt (" 1 - Ver Alumnos \n 2 - Agregar Alumnos \n 3 - Modificar Alumno \n 4 - Volver"));

                switch (opcionAlumnos) {

                    case 1:

                        if ( alumnos.length == 0) alert("No hay datos disponibles.");
                            else alumnos.forEach((alumno) => alumno.monstrarAlumno());

                        break;

                    case 2:

                        let nombre, edad, dni, nombres, alumnoEncontrado;
                
                        do {
            
                            nombre = prompt("Ingrese el nombre y apellido del alumno").trim().toUpperCase();

                            nombres = nombre.split(" ");

                            if (nombres.some((nom) => !isNaN(nom))) alert ("El dato ingresado corresponde a un valor numerico, intente otra vez.");

                                else {

                                    if (nombres.length > 1) {

                                        alumnoEncontrado = alumnos.find ((alumno) => alumno.nombre.toUpperCase() === nombre.toUpperCase())

                                        if (alumnoEncontrado) alert ("El alumno ingresado, ya existe.");

                                    } else if (nombres.length = 1) alert ("El nombre no cuenta con un apellido")
        
                                        else alert ("El dato ingresado no existe.");

                                }
            
                        } while (nombres.some((nom) => !isNaN(nom)) || nombres.length < 2 || alumnoEncontrado);

                        do {

                            edad = prompt(`Ingrese la edad del alumno ${nombre}`);
                            
                            if (isNaN(edad)) alert ("El dato ingresado no corresponde con un valor numerico, intente otra vez.");
                            else if (edad <= 0) alert ("No ha ingresado ningun valor, intente otra vez");
                            else if (edad >= 35) alert ("Usted es muy adulto como para ingresar a la base de datos.")
            
                        }   while (isNaN(edad) || edad <= 0 || edad >= 35);
            
                        do {
            
                            dni = prompt (`Ingrese el numero de DNI del alumno ${nombre}`);
            
                            if (isNaN(dni)) alert ("El dato ingresado no corresponde con un valor numerico, intente otra vez.")
                            
                            if (dni.length < 8) alert ("el numero ingresado no corresponde con un DNI valido");

                                else if (dni.length > 9) alert ("El numero ingresado supera las cifras de un DNI");
            
                        } while (isNaN(dni) || dni.length < 8 || dni.length > 9);
                        
            
                        const alumno = new Alumno (nombre.toUpperCase(),edad,dni);
            
                        alumnos.push(alumno);
            
                        break;
                    
                    case 3:

                        do {

                            let alumnoBusqueda = prompt("Ingrese el nombre y apellido del alumno que desea modificar").toUpperCase();

                            let alumnoEncontrado = alumnos.find (alumno => alumno.nombre.toUpperCase() === alumnoBusqueda.toUpperCase());

                            if (alumnoEncontrado) {
                            
                                alumnoEncontrado.nombre = prompt("Ingrese el nuevo nombre").toUpperCase();

                                alert (`El nombre del alumno ${alumnoBusqueda} ha sido actualizado`);
    
                            } else alert ("El alumno que usted busca no se encuentra en la base de datos.");

                        } while (confirm ("¿Deseas buscar otro alumno?"));

                        break;
                        

                    case 4:
                        break;
                    
                    default: 

                        alert("Opcion incorrecta");

                }

            } while (opcionAlumnos != 4);
            break;

            

        case 2:

            alert ("Seccion en desarrollo, proximamente.");
            break;

        case 3:

            alert("La sesión se ha cerrado con exito.");
            break;

        default: 

            alert("Opción incorrecta");

    }

} while (opcionIngresada != 3);