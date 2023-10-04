
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

let alumnoIndex;

const profesores = JSON.parse(localStorage.getItem("ProfesorStorage")) || [];

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
    volverDeAlumnos: document.getElementById ("volverDeAlumnos"),
    volverDeDatosAlumnos: document.getElementById ("volverDeDatosAlumnos"),
    volverDeEditarAlumno: document.getElementById ("volverDeEditarAlumno"),
    volverDeIngresoAlumno: document.getElementById ("volverDeIngresoAlumno"),
    volverDeActualizarAlumno: document.getElementById ("volverDeActualizarAlumno"),
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

// Funcion de navegacion 

const construirListaAlumnos = () => {

    let listaAlumnos = document.getElementById ("listaAlumnos")

    listaAlumnos.innerHTML = "";

    if (alumnos.length === 0) {


        Swal.fire(
            '¡Ups!',
            'no se han encontrado datos',
            'question'
            );
            
    } else {

        for (let i = 0; i < alumnos.length; i++){
            listaAlumnos.innerHTML += `
            <div class="d-flex justify-content-between align-items-center m-5">
                <img src="./images/lapiz-de-usuario-32.png" alt="">
                <p class="m-0" style="width: 250px;">${alumnos[i].nombre} ${alumnos[i].apellido}</p>
                <p class="m-0">${alumnos[i].edad}</p>
                <p class="m-0">${alumnos[i].dni}</p>
                <div>
                    <button class="irEditarAlumno me-3" data-index="${i}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                        </svg>
                    </button>
                    <button class="irBorrarAlumno" data-index="${i}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                </div>
            </div>`;
        }
    }

    const editarAlumnoBtns = document.querySelectorAll(".irEditarAlumno");
    const borrarAlumno = document.querySelectorAll(".irBorrarAlumno");

    editarAlumnoBtns.forEach ((button) => {
        button.onclick = function(){

            const botonActual = this;
            
            const index = botonActual.dataset.index;

            alumnoIndex = index;

            const alumnoActual = alumnos[index];

            navegar ("datosAlumnos", "agregarAlumno");

            buttons.validarAlumno.classList.replace ("d-block", "d-none");
            buttons.actualizarAlumno.classList.replace ("d-none", "d-block");

            buttons.volverDeIngresoAlumno.parentNode.classList.replace ("d-block", "d-none");
            buttons.volverDeActualizarAlumno.parentNode.classList.replace ("d-none", "d-block");

            inputsAlumnos.nombre.value = alumnoActual.nombre;
            inputsAlumnos.apellido.value = alumnoActual.apellido;
            inputsAlumnos.edad.value = alumnoActual.edad;
            inputsAlumnos.dni.value = alumnoActual.dni;
        }
    });

    borrarAlumno.forEach ((button) => {
        button.onclick = function(){

            const botonActual = this;

            const indexBotonBorrar = parseInt(botonActual.dataset.index, 10);

            Swal.fire({
                title: '¿Estas seguro de eliminar este alumno?',
                text: "no serás capaz de revertir los hechos.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!',
                cancelButtonText: 'Cancelar'
              }).then((result) => {
                
                if (result.isConfirmed) {

                    if (indexBotonBorrar >=0 && indexBotonBorrar < alumnos.length){
                        alumnos.splice (indexBotonBorrar, 1);

                        localStorage.setItem("AlumnoStorage", JSON.stringify(alumnos));

                        construirListaAlumnos();

                        Swal.fire(
                            'Eliminación exitosa',
                            'El alumno ha sido eliminado de la lista',
                            'success'
                        );
                    }
                }
            })
        }
    })
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

buttons.irDatosAlumnos.onclick = () => {

    navegar("alumnos", "datosAlumnos");

    construirListaAlumnos();

}


buttons.volverDeDatosAlumnos.onclick = () => navegar ("datosAlumnos", "alumnos");


buttons.irIngresarAlumno.onclick = () => {

    inputsAlumnos.nombre.value = "";
    inputsAlumnos.apellido.value = "";
    inputsAlumnos.edad.value = "";
    inputsAlumnos.dni.value = "";

    navegar ("alumnos", "agregarAlumno");

    buttons.actualizarAlumno.classList.replace ("d-block", "d-none");
    buttons.validarAlumno.classList.replace ("d-none", "d-block");

    buttons.volverDeActualizarAlumno.parentNode.classList.replace ("d-block", "d-none");
    buttons.volverDeIngresoAlumno.parentNode.classList.replace ("d-none", "d-block");
}

buttons.volverDeActualizarAlumno.onclick = () => {

    navegar ("agregarAlumno", "datosAlumnos");

    construirListaAlumnos();

}

buttons.volverDeIngresoAlumno.onclick = () => navegar ("agregarAlumno", "alumnos");

buttons.volverDeAlumnos.onclick = () => navegar ("alumnos", "principal");

buttons.irProfesores.onclick = () => navegar ("principal", "profesores");


buttons.irDatosProfesores.onclick = () => {

    navegar ("profesores", "datosProfesores");

    let listaProfesores = document.getElementById ("listaProfesores")

    if (profesores.length === 0) {
        Swal.fire(
            '¡Ups!',
            'no se han encontrado datos',
            'question'
            );
    } else {
        listaProfesores.innerHTML = "";

        for ( const profesor of profesores) {
            listaProfesores.innerHTML += `
            <div class="d-flex justify-content-between align-items-center m-5">
                <img src="./images/lapiz-de-usuario-32.png" alt="">
                <p class="m-0" style="width: 250px;">${profesor.nombre} ${profesor.apellido}</p>
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
}

buttons.irIngresarProfesor.onclick = () => navegar ("profesores", "agregarProfesor");


buttons.volverDeIngresoProfesor.onclick = () => navegar ("agregarProfesor", "profesores");

buttons.volverDeDatosProfesores.onclick = () => navegar ("datosProfesores", "profesores");

buttons.volverDeProfesores.onclick = () => navegar ("profesores", "principal");


buttons.validarAlumno.onclick = () => {

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

buttons.actualizarAlumno.onclick = () => {

    let valorInputNombre = inputsAlumnos.nombre.value.trim();
    let valorInputApellido = inputsAlumnos.apellido.value.trim();
    let valorInputEdad = parseInt(inputsAlumnos.edad.value);
    let valorInputDni = parseInt(inputsAlumnos.dni.value);

    const alumnoActual = alumnos[alumnoIndex];

    const alumnoExiste = (alumnoActual.dni != valorInputDni) && alumnos.some (alumno => alumno.dni === valorInputDni);

    if (alumnoExiste) {

        Swal.fire(
            'Actualizacion fallida',
            'el DNI modificado coincide con el de un alumno existente',
            'warning'
            );

    } else if (esValidoNombres(valorInputNombre, valorInputApellido) && edadEsvalido(valorInputEdad, 5, 21) && dniEsValido(valorInputDni)){

        alumnoActual.nombre = valorInputNombre;
        alumnoActual.apellido = valorInputApellido;
        alumnoActual.edad = valorInputEdad;
        alumnoActual.dni = valorInputDni;

        localStorage.setItem ("AlumnoStorage", JSON.stringify(alumnos));
        
        inputsAlumnos.nombre.value = "";
        inputsAlumnos.apellido.value = "";
        inputsAlumnos.edad.value = "";
        inputsAlumnos.dni.value = "";

        
        Swal.fire(
            'Actualización exitosa',
            'el alumno ha sido actualizado',
            'success'
            );

    } else {

        Swal.fire(
            'Actualización fallida',
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
        
        profesores.push (new Profesor (valorInputNombreTeacher, valorInputApellidoTeacher, valorInputEdadTeacher, valorInputDniTeacher, valorInputMateria));

        localStorage.setItem ("ProfesorStorage", JSON.stringify(profesores));


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