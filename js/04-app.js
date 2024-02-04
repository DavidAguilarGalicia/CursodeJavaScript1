const producto = "            Monitor de 30 pulgadas        ";
//Veremos métodos para eliminar el espacio en blanco al inicio y al final de un string 
console.log(producto);
console.log(producto.length);

//Elimarr del inicio...

console.log(producto.trimStart()); 
//Se puede utilizar para el momento es que se llena unas casillas de datos, se eliminen los espacios
console.log(producto.trimEnd());


//Se pueden crear los métodos de forma encadenada chaining

console.log( producto.trimStart().trimEnd() );