
class Persona {
    constructor (nombre, apellido, edad) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad
    }
}

class Alumno extends Persona {
    constructor (nombre, apellido, edad, dni) {
        super(nombre, apellido, edad),
        this.dni = dni
    }
    monstrarAlumno() {
        alert (`Nombre: ${this.nombre} Edad: ${this.edad} DNI: ${this.dni}`);
    }
}

const alumnos = [

    new Alumno ("Juan", "Pérez", 18, 20345678),
    new Alumno ("María", "García", 20, 30456789),
    new Alumno ("Carlos", "López", 19, 40567890),
    new Alumno ("Ana", "Martínez", 21, 50678901),
    new Alumno ("Luis", "Rodriguez", 21, 60789012)

];

const menus = {
    principal: document.getElementById ("menuPrincipal"),
    salir: document.getElementById ("menuSalir"),
    alumnos: document.getElementById ("menuAlumnos"),
    datosAlumnos: document.getElementById ("datosAlumnos"),
    agregarAlumno: document.getElementById ("agregarAlumno"),
    profesores: document.getElementById ("menuProfesores"),
    datosProfesores: document.getElementById ("datosProfesores"),
    agregarProfesor: document.getElementById ("agregarProfesor")
}

const buttons = {
    salir: document.getElementById ("salir"),
    confirmarSalir: document.getElementById ("confirmarSalir"),
    irPrincipal: document.getElementById ("irPrincipal"),
    irAlumnos: document.getElementById ("irAlumnos"),
    irDatosAlumnos: document.getElementById ("irDatosAlumnos"),
    irIngresarAlumno: document.getElementById ("irIngresarAlumno"),
    irProfesores: document.getElementById ("irProfesores"),
    irDatosProfesores: document.getElementById ("irDatosProfesores"),
    irIngresarProfesor: document.getElementById ("irIngresarProfesor"),
    volverDeAlumnos: document.getElementById ("volverDeAlumnos"),
    volverDeDatosAlumnos: document.getElementById ("volverDeDatosAlumnos"),
    volverDeIngresoAlumno: document.getElementById ("volverDeIngresoAlumno"),
    volverDeProfesores: document.getElementById ("volverDeProfesores"),
    volverDeDatosProfesores: document.getElementById ("volverDeDatosProfesores"),
    volverDeIngresoProfesor: document.getElementById ("volverDeIngresoProfesor")
}

const inputsAlumnos = {
    nombre: document.getElementById ("inputName"),
    apellido: document.getElementById ("inputLastName"),
    edad: document.getElementById ("inputAge"),
    dni: document.getElementById ("inputdni")
}

buttons.salir.onclick = () => {
    menus.salir.classList.replace ("d-none", "d-block");
    menus.principal.classList.replace ("d-block", "d-none");
}

buttons.confirmarSalir.onclick = () => {
    window.close();
}

buttons.irPrincipal.onclick = () => {
    menus.salir.classList.replace ("d-block", "d-none");
    menus.principal.classList.replace ("d-none", "d-block");
}

buttons.irAlumnos.onclick = () => {
    menus.principal.classList.replace ("d-block", "d-none");
    menus.alumnos.classList.replace ("d-none", "d-block");
}

buttons.irDatosAlumnos.onclick = () => {
    menus.alumnos.classList.replace ("d-block", "d-none");
    menus.datosAlumnos.classList.replace("d-none", "d-block");

    let listaAlumnos = document.getElementById ("listaAlumnos")

    listaAlumnos.innerHTML = "";

    for (const alumno of alumnos) {
        listaAlumnos.innerHTML += `
        <div class="d-flex justify-content-between align-items-center m-5">
            <img src="./images/lapiz-de-usuario-32.png" alt="">
            <p class="m-0">${alumno.nombre} ${alumno.apellido}</p>
            <p class="m-0">${alumno.edad}</p>
            <p class="m-0">${alumno.dni}</p>
            <div>
                <button class="me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>
            </div>
        </div>`;
    }
}

buttons.volverDeDatosAlumnos.onclick = () => {
    menus.datosAlumnos.classList.replace ("d-block", "d-none");
    menus.alumnos.classList.replace ("d-none", "d-block");
}

buttons.irIngresarAlumno.onclick = () => {
    menus.alumnos.classList.replace ("d-block", "d-none");
    menus.agregarAlumno.classList.replace ("d-none", "d-block");
}

buttons.volverDeIngresoAlumno.onclick = () => {
    menus.agregarAlumno.classList.replace ("d-block", "d-none");
    menus.alumnos.classList.replace ("d-none", "d-block");
}

buttons.volverDeAlumnos.onclick = () => {
    menus.alumnos.classList.replace ("d-block", "d-none");
    menus.principal.classList.replace ("d-none", "d-block");
}

buttons.irProfesores.onclick = () => {
    menus.principal.classList.replace ("d-block", "d-none");
    menus.profesores.classList.replace ("d-none", "d-block");
}

buttons.irDatosProfesores.onclick = () => {
    menus.profesores.classList.replace ("d-block", "d-none");
    menus.datosProfesores.classList.replace ("d-none", "d-block");
}

buttons.irIngresarProfesor.onclick = () => {
    menus.profesores.classList.replace ("d-block", "d-none");
    menus.agregarProfesor.classList.replace ("d-none", "d-block")
}

buttons.volverDeIngresoProfesor.onclick = () => {
    menus.agregarProfesor.classList.replace ("d-block", "d-none");
    menus.profesores.classList.replace ("d-none", "d-block");
}

buttons.volverDeDatosProfesores.onclick = () => {
    menus.datosProfesores.classList.replace ("d-block", "d-none");
    menus.profesores.classList.replace ("d-none","d-block");
}

buttons.volverDeProfesores.onclick = () => {
    menus.profesores.classList.replace ("d-block", "d-none");
    menus.principal.classList.replace ("d-none", "d-block");
}

const validarAlumno = document.getElementById ("validarAlumno");

const esValidoNombres = (valorInputNombre, valorInputApellido) => {
    return /^[a-zA-ZñÑ]+$/.test(valorInputNombre) && /^[a-zA-ZñÑ]+$/.test(valorInputApellido);
}

const edadEsvalido = (valorInputEdad, edadmin, edadmax) => {
    return !isNaN(valorInputEdad) && valorInputEdad >= edadmin && valorInputEdad <= edadmax;
}

const dniEsValido = (valorInputDni) => {
    return !isNaN(valorInputDni) && /^[0-9a-zA-Z]{8}$/.test(valorInputDni);
}

validarAlumno.onclick = () => {

    let valorInputNombre = inputsAlumnos.nombre.value.trim();
    let valorInputApellido = inputsAlumnos.apellido.value.trim();
    let valorInputEdad = parseInt(inputsAlumnos.edad.value);
    let valorInputDni = parseInt(inputsAlumnos.dni.value);

    if (esValidoNombres(valorInputNombre, valorInputApellido) && edadEsvalido(valorInputEdad, 5, 21) && dniEsValido(valorInputDni)){
        alumnos.push(new Alumno (valorInputNombre, valorInputApellido, valorInputEdad, valorInputDni))
        alert ("alumno cargado exitosamente");
        inputsAlumnos.nombre.value = "";
        inputsAlumnos.apellido.value = "";
        inputsAlumnos.edad.value = "";
        inputsAlumnos.dni.value = "";
    }   else alert ("ingreso invalido");
}
