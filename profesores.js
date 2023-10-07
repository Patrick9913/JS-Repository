class Profesor extends Persona {
    constructor (nombre, apellido, edad, dni, materia) {
        super (nombre, apellido, edad),
        this.dni = dni,
        this.materia = materia
    }
}

const profesores = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROFESORES)) || [];

let profesorIndex;

const inputsProfesores = {
    nombre: document.getElementById ("inputNameTeacher"),
    apellido: document.getElementById ("inputLastNameTeacher"),
    edad: document.getElementById ("inputAgeTeacher"),
    dni: document.getElementById ("inputdniTeacher"),
    materia: document.getElementById ("inputassigment")
}

buttons.irDatosProfesores.onclick = () => {

    navegar ("profesores", "datosProfesores");

    construirListaProfesores();

}

buttons.irIngresarProfesor.onclick = () => {

    titulos.actualizarProfesor.innerText = "Agregar Profesor";

    inputsProfesores.nombre.value = "";
    inputsProfesores.apellido.value = "";
    inputsProfesores.edad.value = "";
    inputsProfesores.dni.value = "";
    inputsProfesores.materia.value = "Seleccionar";
    
    navegar ("profesores", "agregarProfesor");

    buttons.actualizarProfesor.classList.replace ("d-block", "d-none");
    buttons.validarProfesor.classList.replace ("d-none", "d-block");

    buttons.volverDeActualizarProfesor.parentNode.classList.replace ("d-block", "d-none");
    buttons.volverDeIngresoProfesor.parentNode.classList.replace ("d-none", "d-block");

    inputsProfesores.materia.classList.replace ("btn-success", "btn-primary");
}

buttons.volverDeActualizarProfesor.onclick = () => {

    navegar ("agregarProfesor", "datosProfesores");

    construirListaProfesores();

}

const construirListaProfesores = () => {

    let listaProfesores = document.getElementById ("listaProfesores")

    listaProfesores.innerHTML = "";

    if (profesores.length === 0) {

        Swal.fire(
            '¡Ups!',
            'no se han encontrado datos',
            'question'
            );

    } else {

        for (let i = 0; i < profesores.length; i++){

            listaProfesores.innerHTML += `
            <div class="d-flex justify-content-between align-items-center m-5">
                <img src="./images/lapiz-de-usuario-32.png" alt="">
                <p class="m-0" style="width: 200px;">${profesores[i].nombre} ${profesores[i].apellido}</p>
                <p class="m-0">${profesores[i].edad}</p>
                <p class="m-0">${profesores[i].dni}</p>
                <p class="m-0" style="width: 150px;">${profesores[i].materia}</p>
                <div>
                    <button class="me-3 irEditarProfesor" data-index="${i}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                        </svg>
                    </button>
                    <button class="irBorrarProfesor" data-index="${i}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                </div>
            </div>`
        }
    }

    const editarProfesorBtns = document.querySelectorAll (".irEditarProfesor");
    const BorrarProfesorBtns = document.querySelectorAll (".irBorrarProfesor");

    editarProfesorBtns.forEach ((button) => {
        button.onclick = function(){

            titulos.actualizarProfesor.innerText = "Actualizar Profesor";

            const botonActual = this;

            const index = botonActual.dataset.index;

            profesorIndex = index;

            const profesorActual = profesores[index];

            navegar ("datosProfesores", "agregarProfesor");

            buttons.validarProfesor.classList.replace ("d-block", "d-none");
            buttons.actualizarProfesor.classList.replace ("d-none", "d-block");

            buttons.volverDeIngresoProfesor.parentNode.classList.replace ("d-block", "d-none");
            buttons.volverDeActualizarProfesor.parentNode.classList.replace ("d-none", "d-block");

            inputsProfesores.nombre.value = profesorActual.nombre;
            inputsProfesores.apellido.value = profesorActual.apellido;
            inputsProfesores.edad.value = profesorActual.edad;
            inputsProfesores.dni.value = profesorActual.dni;
            inputsProfesores.materia.value = profesorActual.materia;

            inputsProfesores.materia.classList.replace ("btn-primary", "btn-success");

        }
    })

    BorrarProfesorBtns.forEach ((button) => {
        button.onclick = function(){

            const botonActual = this;

            const indexBotonBorrar = parseInt(botonActual.dataset.index, 10);

            Swal.fire({
                title: '¿Estas seguro de eliminar este profesor?',
                text: "no serás capaz de revertir los hechos.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!',
                cancelButtonText: 'Cancelar'
              }).then((result) => {
                
                if (result.isConfirmed) {

                    if (indexBotonBorrar >= 0 && indexBotonBorrar < profesores.length){
                        profesores.splice (indexBotonBorrar, 1);

                        localStorage.setItem (LOCAL_STORAGE_PROFESORES, JSON.stringify(profesores));

                        construirListaProfesores();

                        Swal.fire(
                            'Eliminación exitosa',
                            'El profesor ha sido eliminado de la lista',
                            'success'
                        );
                    }
                }
            })
        }
    })
}

buttons.validarProfesor.onclick = async () => {

    let valorInputNombreTeacher = inputsProfesores.nombre.value.trim();
    let valorInputApellidoTeacher = inputsProfesores.apellido.value.trim();
    let valorInputEdadTeacher = parseInt(inputsProfesores.edad.value);
    let valorInputDniTeacher = parseInt(inputsProfesores.dni.value);
    let valorInputMateria = inputsProfesores.materia.value.trim();

    const profesorExiste = profesores.some(profesor => profesor.dni === valorInputDniTeacher);

    if (profesorExiste) {

        Swal.fire(
            'Ingreso invalido',
            'el profesor que usted desea agregar, ya existe',
            'warning'
            );

    } else if (esValidoNombres(valorInputNombreTeacher, valorInputApellidoTeacher) && edadEsvalido(valorInputEdadTeacher, 22, 64) && dniEsValido(valorInputDniTeacher) && await materiaEsValido(valorInputMateria)){
        
        profesores.push(new Profesor (valorInputNombreTeacher, valorInputApellidoTeacher, valorInputEdadTeacher, valorInputDniTeacher, valorInputMateria));

        localStorage.setItem(LOCAL_STORAGE_PROFESORES, JSON.stringify(profesores));

        inputsProfesores.nombre.value = "";
        inputsProfesores.apellido.value = "";
        inputsProfesores.edad.value = "";
        inputsProfesores.dni.value = "";
        inputsProfesores.materia.value = "Seleccionar";

        inputsProfesores.materia.classList.replace("btn-success", "btn-primary");

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

inputsProfesores.materia.onclick = () => {

    fetch (URLJSON)
        .then ((resultado) => resultado.json())
        .then ((data) => {
            const materias = data.record;
            localStorage.setItem(LOCAL_STORAGE_MATERIAS, JSON.stringify(materias.Materias));
            Swal.fire({
                title: 'Materias',
                input: 'select',
                inputOptions: materias,
                inputPlaceholder: 'Selecciona una materia',
                showCancelButton: true,
                inputValidator: (value) => {
                  return new Promise((resolve) => {
                    if (value){
                      resolve()
                    } else {
                      resolve('Debes seleccionar una materia')
                    }
                  })
                }
              }).then((result) => {
                if (result.isConfirmed) {
                  const selectedMateria = result.value;
                  inputsProfesores.materia.value = materias.Materias[selectedMateria];
                  inputsProfesores.materia.classList.replace("btn-primary", "btn-success");
                }
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });     

}

buttons.actualizarProfesor.onclick = async () => {

    let valorInputNombreTeacher = inputsProfesores.nombre.value.trim();
    let valorInputApellidoTeacher = inputsProfesores.apellido.value.trim();
    let valorInputEdadTeacher = parseInt(inputsProfesores.edad.value);
    let valorInputDniTeacher = parseInt(inputsProfesores.dni.value);
    let valorInputMateria = inputsProfesores.materia.value.trim();

    const profesorActual = profesores[profesorIndex];

    const profesorExiste = (profesorActual.dni != valorInputDniTeacher) && profesores.some(profesor => profesor.dni === valorInputDniTeacher);

    if (profesorExiste) {
        Swal.fire(
            'Actualizacion fallida',
            'el DNI modificado coincide con el de un profesor existente',
            'warning'
        );
    } else if (esValidoNombres(valorInputNombreTeacher, valorInputApellidoTeacher) && edadEsvalido(valorInputEdadTeacher, 22, 64) && dniEsValido(valorInputDniTeacher) && await materiaEsValido(valorInputMateria)) {

        profesorActual.nombre = valorInputNombreTeacher;
        profesorActual.apellido = valorInputApellidoTeacher;
        profesorActual.edad = valorInputEdadTeacher;
        profesorActual.dni = valorInputDniTeacher;
        profesorActual.materia = valorInputMateria;

        localStorage.setItem(LOCAL_STORAGE_PROFESORES, JSON.stringify(profesores));

        Swal.fire(
            'Actualizacion exitosa',
            'el profesor ha sido actualizado',
            'success'
        );

    } else {

        Swal.fire(
            'Actualizacion fallida',
            'los datos proporcionados son incorrectos',
            'error'
        );
    }
}