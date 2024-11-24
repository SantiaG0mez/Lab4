function validar(){
    let nombre=document.getElementById("nombre").value;
    let Image=document.getElementById("image").value;
    let email=document.getElementById("email").value;


if(nombre=="" ||Image=="" ||email==""  ){
    alert("Faltan campos obligatorios*",nombre);
    return false;
}
else{
    return true;
} 
}