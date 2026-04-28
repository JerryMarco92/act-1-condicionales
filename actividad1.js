let usuario = prompt("Introduce tu nombre");

let contraseña = prompt("Introduce tu contraseña");

if (usuario === "Jerome" && contraseña === "1234"){
    alert(`Bienvenido, ${usuario}`);
}else{
    alert("Acceso denegado");
}