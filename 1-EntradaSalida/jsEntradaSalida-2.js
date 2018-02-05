/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//esto es un comentario
	//alert ("anda");
	//toda linea de instruccion, termina con punto y coma (;)
	var nombre;
/*	
 es en bloque
	alert ("nombre");
	alert (nombre);
	nombre = "sasha";
	alert (nombre);
*/
    nombre = prompt ("ingrese su nombre", "natalia natalia");
	
    /*
    alert ("su nombre es");
	alert (nombre);
    */
     alert ("su nombre es: " + nombre);
     
}

