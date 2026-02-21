const PASSWORD = "ElprofeOcampoesGood";

function verificarPassword(){

    const input = document.getElementById("passwordInput").value;
    const error = document.getElementById("errorMsg");

    if(input === PASSWORD){
        document.getElementById("loginOverlay").style.display = "none";
    }else{
        error.textContent = "❌ Contraseña incorrecta";
    }
}

/* ENTER = ingresar */
document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        verificarPassword();
    }
});