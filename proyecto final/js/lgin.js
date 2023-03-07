function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if( user == "juan" && password == "alo"){
        window.location = 'Inicior6.html'
    }else{
        alert("contraseña incorrecta")
    }
}