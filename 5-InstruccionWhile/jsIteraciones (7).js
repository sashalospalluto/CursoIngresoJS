function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while (respuesta == "si")
	{
		numero = prompt ("ingrese un numero");
		numero = parseInt (numero);
		acumulador = acumulador+numero;
		contador++;
		respuesta = prompt ("Indique con un 'si' si desea seguir ingresando un numero, de lo contrario ingrese un 'no'");
	}




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN