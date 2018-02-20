function Mostrar()
{

	var contador=0;
	var respuesta='si';
	var numero;
	var maximo=0;
	var minimo=0;

	while(respuesta== "si")
	{
		numero = prompt ("ingrese un numero");
		numero = parseInt (numero);
		contador++;
		 
		if (contador==1)
		{
		 	maximo=numero;
		 	minimo=numero;
		}

		if (maximo<numero)
		{
			maximo=numero;
		}	else
			{	if (minimo>numero)
				{
					minimo=numero;
				}
			}

		respuesta = prompt ("Indique con un 'si' si desea seguir ingresando un numero, de lo contrario ingrese un 'no'");
	
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN.


