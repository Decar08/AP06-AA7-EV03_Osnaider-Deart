const loginAdministrador = document.querySelector('.admin');
const loginUsuario = document.querySelector('.user');
const recordarContraseña = document.querySelector('.forgetPass');

loginAdministrador.addEventListener('click', loginAdmin);
loginUsuario.addEventListener('click', loginUser);
recordarContraseña.addEventListener('click', olvideContraseña);



function loginAdmin(){
    var user, password

    user = document.getElementById("Usuario").value;
    password = document.getElementById("Password").value;

    if(user == "admin" && password == "123456"){
        // alert("¡Iniciaste sesión");
        window.location.assign('frm_menu_inicio_super_usuarios.html');
    } else {
        alert("Usuario y/o contraseña incorrectos.");
    }
}

function loginUser(){
    var user, password

    user = document.getElementById("Usuario").value;
    password = document.getElementById("Password").value;

    if(user == "user" && password == "123456"){
        // alert("¡Iniciaste sesión");
        window.location.assign('frm_menu_inicio_usuarios.html');
    } else {
        alert("Usuario y/o contraseña incorrectos.");
    }
}

function olvideContraseña(){
    window.location.assign('frm_cambio_contraseña.html');
}