
const URLJSON = 'https://api.jsonbin.io/v3/b/6520aea712a5d37659885485';
const LOCAL_STORAGE_ALUMNOS = "AlumnoStorage";
const LOCAL_STORAGE_PROFESORES = "ProfesorStorage";
const LOCAL_STORAGE_MATERIAS = "materias";

const esValidoNombres = (nombre, apellido) => {
    return /^[a-zA-ZáÁéÉíÍóÓúÚüÜñÑ\s]+$/.test(nombre) && /^[a-zA-ZáÁéÉíÍóÓúÚüÜñÑ\s]+$/.test(apellido);
}

const edadEsvalido = (edad, edadmin, edadmax) => {
    return !isNaN(edad) && edad >= edadmin && edad <= edadmax;
}

const dniEsValido = (dni) => {
    return !isNaN(dni) && /^[0-9a-zA-Z]{8}$/.test(dni);
}

const materiaEsValido = async (materia) => {
    let materias = JSON.parse(localStorage.getItem (LOCAL_STORAGE_MATERIAS)) || null;
    if (!materias) {
        await fetch (URLJSON)
            .then (data => data.json())
            .then (data => {
                materias = data.record.Materias;
                localStorage.setItem(LOCAL_STORAGE_MATERIAS, JSON.stringify(materias));
            })
    }

    let listaMaterias = Object.values (materias);

    const result = listaMaterias.includes(materia);

    return result;
}


class Persona {
    constructor (nombre, apellido, edad) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad
    }
}

const menus = {
    principal: document.getElementById ("menuPrincipal"),
    salir: document.getElementById ("menuSalir"),
    alumnos: document.getElementById ("menuAlumnos"),
    datosAlumnos: document.getElementById ("datosAlumnos"),
    agregarAlumno: document.getElementById ("agregarAlumno"),
    modificarAlumno: document.getElementById ("modificarAlumno"),
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
    validarAlumno: document.getElementById ("validarAlumno"),
    actualizarAlumno: document.getElementById ("actualizarAlumno"),
    irProfesores: document.getElementById ("irProfesores"),
    irDatosProfesores: document.getElementById ("irDatosProfesores"),
    irIngresarProfesor: document.getElementById ("irIngresarProfesor"),
    validarProfesor: document.getElementById ("validarProfesor"),
    actualizarProfesor: document.getElementById ("actualizarProfesor"),
    volverDeAlumnos: document.getElementById ("volverDeAlumnos"),
    volverDeDatosAlumnos: document.getElementById ("volverDeDatosAlumnos"),
    volverDeEditarAlumno: document.getElementById ("volverDeEditarAlumno"),
    volverDeIngresoAlumno: document.getElementById ("volverDeIngresoAlumno"),
    volverDeActualizarAlumno: document.getElementById ("volverDeActualizarAlumno"),
    volverDeProfesores: document.getElementById ("volverDeProfesores"),
    volverDeDatosProfesores: document.getElementById ("volverDeDatosProfesores"),
    volverDeIngresoProfesor: document.getElementById ("volverDeIngresoProfesor"),
    volverDeActualizarProfesor: document.getElementById ("volverDeActualizarProfesor")
}

const inputsAlumnosMod = {
    nombre: document.getElementById ("inputNameMod"),
    apellido: document.getElementById ("inputLastNameMod"),
    edad: document.getElementById ("inputAgeMod"),
    dni: document.getElementById ("inputdniMod")
}

const titulos = {
    actualizarAlumno: document.getElementById ("tituloAlumno"),
    actualizarProfesor: document.getElementById ("tituloProfesor")
}

const navegar = (menuActual, menuObjetivo) => {
    menus[menuActual].classList.replace ("d-block", "d-none");
    menus[menuObjetivo].classList.replace ("d-none", "d-block");
}

buttons.salir.onclick = () => navegar ("principal", "salir");

buttons.confirmarSalir.onclick = () => {
    window.close();
}

buttons.irPrincipal.onclick = () => navegar ("salir", "principal");

buttons.irAlumnos.onclick = () => navegar ("principal", "alumnos");

buttons.volverDeDatosAlumnos.onclick = () => navegar ("datosAlumnos", "alumnos");

buttons.volverDeIngresoAlumno.onclick = () => navegar ("agregarAlumno", "alumnos");

buttons.volverDeAlumnos.onclick = () => navegar ("alumnos", "principal");

buttons.irProfesores.onclick = () => navegar ("principal", "profesores");

buttons.volverDeIngresoProfesor.onclick = () => navegar ("agregarProfesor", "profesores");

buttons.volverDeDatosProfesores.onclick = () => navegar ("datosProfesores", "profesores");

buttons.volverDeProfesores.onclick = () => navegar ("profesores", "principal");
