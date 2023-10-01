
const esValidoNombres = (nombre, apellido) => {
    return /^[a-zA-ZáÁéÉíÍóÓúÚüÜñÑ\s]+$/.test(nombre) && /^[a-zA-ZáÁéÉíÍóÓúÚüÜñÑ\s]+$/.test(apellido);
}

const edadEsvalido = (edad, edadmin, edadmax) => {
    return !isNaN(edad) && edad >= edadmin && edad <= edadmax;
}

const dniEsValido = (dni) => {
    return !isNaN(dni) && /^[0-9a-zA-Z]{8}$/.test(dni);
}

const materiaEsValido = (materia) => {
    return /^[a-zA-ZáÁéÉíÍóÓúÚüÜñÑ\s]+$/.test(materia);
}

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
}

class Profesor extends Persona {
    constructor (nombre, apellido, edad, dni, materia) {
        super (nombre, apellido, edad),
        this.dni = dni,
        this.materia = materia
    }
}

const alumnos = JSON.parse(localStorage.getItem("AlumnoStorage")) || [];

const profesores = [

    new Profesor ("Carlos", "Dominguez", 54, 45678901, "Matematicas"),
    new Profesor ("Maria", "ines", 34, 49658701, "Geografía"),
    new Profesor ("Juan", "Gomez", 45, 36549872, "Sociales"),
    new Profesor ("Ana", "Lopez", 40, 29761345, "Lengua"),
    new Profesor ("Luis", "Pérez", 38, 41872659, "Naturales")
]

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
    irProfesores: document.getElementById ("irProfesores"),
    irDatosProfesores: document.getElementById ("irDatosProfesores"),
    irIngresarProfesor: document.getElementById ("irIngresarProfesor"),
    volverDeAlumnos: document.getElementById ("volverDeAlumnos"),
    volverDeDatosAlumnos: document.getElementById ("volverDeDatosAlumnos"),
    volverDeEditarAlumno: document.getElementById ("volverDeEditarAlumno"),
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

const inputsAlumnosMod = {
    nombre: document.getElementById ("inputNameMod"),
    apellido: document.getElementById ("inputLastNameMod"),
    edad: document.getElementById ("inputAgeMod"),
    dni: document.getElementById ("inputdniMod")
}

const inputsProfesores = {
    nombre: document.getElementById ("inputNameTeacher"),
    apellido: document.getElementById ("inputLastNameTeacher"),
    edad: document.getElementById ("inputAgeTeacher"),
    dni: document.getElementById ("inputdniTeacher"),
    materia: document.getElementById ("inputassigment")
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
                <button class="irEditarAlumno me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                </button>
                <button class="irBorrarAlumno">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>
            </div>
        </div>`;
    }

    const editarAlumno = document.querySelectorAll(".irEditarAlumno");
    const borrarAlumno = document.querySelectorAll(".irBorrarAlumno");

    editarAlumno.forEach ((editarAlumno, index) => {
        editarAlumno.onclick = () => {
            menus.datosAlumnos.classList.replace ("d-block", "d-none");
            menus.modificarAlumno.classList.replace ("d-none", "d-block");

            let valorInputNombreMod = alumnos.nombre;
            let valorInputApellidoMod = alumnos.apellido;
            let valorInputEdadMod = alumnos.edad;
            let valorInputDniMod = alumnos.dni;

        }
    });
}

buttons.volverDeEditarAlumno.onclick = () => {
    menus.modificarAlumno.classList.replace ("d-block", "d-none");
    menus.datosAlumnos.classList.replace ("d-none", "d-block");
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

    let listaProfesores = document.getElementById ("listaProfesores")

    listaProfesores.innerHTML = "";

    for ( const profesor of profesores) {
        listaProfesores.innerHTML += `
        <div class="d-flex justify-content-between align-items-center m-5">
            <img src="./images/lapiz-de-usuario-32.png" alt="">
            <p class="m-0">${profesor.nombre} ${profesor.apellido}</p>
            <p class="m-0">${profesor.edad}</p>
            <p class="m-0">${profesor.dni}</p>
            <p class="m-0">${profesor.materia}</p>
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
        </div>`
    }
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

validarAlumno.onclick = () => {

    let valorInputNombre = inputsAlumnos.nombre.value.trim();
    let valorInputApellido = inputsAlumnos.apellido.value.trim();
    let valorInputEdad = parseInt(inputsAlumnos.edad.value);
    let valorInputDni = parseInt(inputsAlumnos.dni.value);

    const alumnoExiste = alumnos.some (alumno => alumno.dni === valorInputDni);

    if (alumnoExiste) {

        Swal.fire(
            'Ingreso invalido',
            'el alumno que usted desea agregar, ya existe',
            'warning'
            );

    } else if (esValidoNombres(valorInputNombre, valorInputApellido) && edadEsvalido(valorInputEdad, 5, 21) && dniEsValido(valorInputDni)){

        alumnos.push(new Alumno (valorInputNombre, valorInputApellido, valorInputEdad, valorInputDni));

        localStorage.setItem ("AlumnoStorage", JSON.stringify(alumnos));
        
        inputsAlumnos.nombre.value = "";
        inputsAlumnos.apellido.value = "";
        inputsAlumnos.edad.value = "";
        inputsAlumnos.dni.value = "";

        
        Swal.fire(
            'Ingreso exitoso',
            'el alumno ha sido añadido a la lista',
            'success'
            );

    } else {

        Swal.fire(
            'Ingreso invalido',
            'los datos proporcionados son incorrectos',
            'error'
            );

    }
}


const validarProfesor = document.getElementById ("validarProfesor");

validarProfesor.onclick = () => {

    let valorInputNombreTeacher = inputsProfesores.nombre.value.trim();
    let valorInputApellidoTeacher = inputsProfesores.apellido.value.trim();
    let valorInputEdadTeacher = parseInt (inputsProfesores.edad.value);
    let valorInputDniTeacher = parseInt (inputsProfesores.dni.value);
    let valorInputMateria = inputsProfesores.materia.value.trim();

    const profesorExiste = profesores.some (profesor => profesor.dni === valorInputDniTeacher);

    if (profesorExiste) {

        Swal.fire(
            'Ingreso invalido',
            'el profesor que usted desea agregar, ya existe',
            'warning'
            );

    } else if (esValidoNombres(valorInputNombreTeacher, valorInputApellidoTeacher) && edadEsvalido(valorInputEdadTeacher, 22, 64) && dniEsValido(valorInputDniTeacher) && materiaEsValido(valorInputMateria)) {
        
        profesores.push (new Profesor (valorInputNombreTeacher, valorInputApellidoTeacher, valorInputEdadTeacher, valorInputDniTeacher, valorInputMateria))

        inputsProfesores.nombre.value = "";
        inputsProfesores.apellido.value = "";
        inputsProfesores.edad.value = "";
        inputsProfesores.dni.value = "";
        inputsProfesores.materia.value = "";

        Swal.fire(
            'Ingreso exitoso',
            'el profesor ha sido añadido a la lista',
            'success'
            );

    } else {

        Swal.fire(
            'Ingreso invalido',
            'los datos proporcionados son incorrectos',
            'error'
            );

    }
}