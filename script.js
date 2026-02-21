const password = "seguridad2026";

let acceso = prompt("Ingrese contraseña para ver la documentación:");

if(acceso !== password){
document.body.innerHTML =
"<h1 style='text-align:center;margin-top:20%'>❌ Acceso Denegado</h1>";
}