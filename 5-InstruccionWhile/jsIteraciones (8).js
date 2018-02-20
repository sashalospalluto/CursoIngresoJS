function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while (respuesta == "si")
	{
		numero = prompt ("ingrese un numero");
		numero = parseInt (numero);
		contador++;
		if (numero>0)
		{
			positivo=numero+positivo;

		}	else
			{
				negativo= negativo * (numero);
			}

		respuesta = prompt ("Indique con un 'si' si desea seguir ingresando un numero, de lo contrario ingrese un 'no'");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN