//Variables pagina de login
const loginAdministrador = document.querySelector('.admin');
const loginUsuario = document.querySelector('.user');
const recordarContraseña = document.querySelector('.forgetPass');


//Variables menu inicio usuarios
const btnActividades = document.querySelector('.actividades');
const btnPqr = document.querySelector('.pqr');
const btnCrearPqr = document.querySelector('.Crear_Pqr');
const btnSalir = document.querySelector('.salir');

//Variables cambio de contraseña
const btnAtras = document.querySelector('.atras');
const btnNuevaPass = document.querySelector('.crearuser');

//Variables creaión de usuarios
const btnAtrasCreUsuario = document.querySelector('.atrasCreUser');
const btnCrearUsuario = document.querySelector('crearuser');

//variables creación de actividades
const btnCrearActividad = document.querySelector('.crearActividad');

//Eventos pagina de login
loginAdministrador.addEventListener('click', loginAdmin);
loginUsuario.addEventListener('click', loginUser);
recordarContraseña.addEventListener('click', olvideContraseña);

//Eventos menu de inicio usuarios
btnActividades.addEventListener('click', goActividades);
btnPqr.addEventListener('click', goPqr);
btnCrearPqr.addEventListener('click', goCrearpqr);
btnSalir.addEventListener('click', exit);

//Eventos cambio de contraseña
btnAtras.addEventListener('click', atras);
btnNuevaPass.addEventListener('click', guardarPass);

//Eventos creación de usuarios
btnAtrasCreUsuario.addEventListener('click', backMenuAdmin);
btnCrearUsuario.addEventListener('click', crearUsuario);

//Eventos crear actividad
btnCrearActividad.addEventListener('click', crearActividad);


//Funciones pagina de login
function loginAdmin() {
    var user, password;

    user = document.getElementById("Usuario").value;
    password = document.getElementById("Password").value;

    if (user == "admin" && password == "123456") {
        // alert("¡Iniciaste sesión");
        window.location.assign('frm_menu_inicio_super_usuarios.html');
    } else {
        alert("Verifique sus datos.");
    }
}

function loginUser() {
    var user, password

    user = document.getElementById("Usuario").value;
    password = document.getElementById("Password").value;

    if (user == "user" && password == "123456") {
        // alert("¡Iniciaste sesión");
        window.location.assign('frm_menu_inicio_usuarios.html');
    } else {
        alert("Verifique sus datos.");
    }
}

function olvideContraseña() {
    window.location.assign('frm_cambio_contraseña.html');
}

//Funciones menu inicio usuarios
function goActividades() {
    window.location.assign('frm_lista_actividades_user.html');
}

function goPqr() {
    window.location.assign('frm_lista_pqr_user.html');
}

function goCrearpqr() {
    window.location.assign('frm_crear_pqr_user.html');
}

function exit() {
    window.location.assign('principal.html');
}

//Funciones cambio de contraseña
function atras() {
    window.location.assign('principal.html');
}

function guardarPass() {
    var user, ConfirmPassword, newPassword;

    user = document.getElementById("Usuario").value;
    newPassword = document.getElementById("NewPassword").value;
    ConfirmPassword = document.getElementById("ConfirPassword").value;

    if ((newPassword == '' && ConfirmPassword == '') || (newPassword !== ConfirmPassword)) {
        alert('usuario vacío o las contraseñas no coinciden.');
    } else if ((user == '' && newPassword == '' && ConfirmPassword == '') || (newPassword == ConfirmPassword && user == '')) {
        alert('Los campos no pueden estar en blanco');
    } else {
        window.location.assign('principal.html');
        alert('Contraseña modificada');
    }
}

//funciones crear usuario
function backMenuAdmin() {
    window.location.assign('frm_menu_inicio_super_usuarios.html');
}

function crearUsuario() {
    var cedulaUsuario, primerNombre, segundoNombre, PrimerApellido, segundoApellido, cargoEmpleado, passAsignada;

    cedulaUsuario = document.getElementById("cedula_usuario").value;
    primerNombre = document.getElementById("primer_nombre").value;
    segundoNombre = document.getElementById("segundo_nombre").value;
    PrimerApellido = document.getElementById("primer_apellido").value;
    segundoApellido = document.getElementById("segundo_apellido").value;
    cargoEmpleado = document.getElementById("cargo").value;
    passAsignada = document.getElementById("contraseña_nuevo_usuario").value;

    if ((cedulaUsuario == '' && primerNombre == '' && PrimerApellido == '' && cargoEmpleado == '' && passAsignada == '')) {
        alert('Los campos con * son obligatorios.');
    } else if ((cedulaUsuario == '' || primerNombre == '' || PrimerApellido == '' || cargoEmpleado == '' || passAsignada == '')) {
        alert('Los campos con * son obligatorios.');
    } else {
        alert('Nuevo usuario creado.');
        window.location.assign('frm_creacion_usuarios.html');
    }

}

//función crear actividad
function crearActividad(){
    var actividad, fechaActividad, estadoActividad, cedulaUsuario;

    actividad = document.getElementById("nombre_actividad").vale;
    fechaActividad = document.getElementById("fecha_actividad").vale;
    estadoActividad = document.getElementById("estado_actividad").vale;
    cedulaUsuario = document.getElementById("cedula_usuario").vale;

    if(fechaActividad == null){
        alert("Debes diligenciar todos los campos.");
    } else if (fechaActividad !== null ){
        alert('Nueva actividad creado.');
        window.location.assign('frm_crear_actividad.html');
    }
}