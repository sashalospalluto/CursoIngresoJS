function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var numerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciasNumeros;
	var respuesta="si";

	while(respuesta!="no")
	{
		numero = prompt ("ingrese un numero");
		numero = parseInt (numero);
		
		if (numero>0)
		{
			sumaPositivos=numero+sumaPositivos;
			cantidadPositivos++;
		}	else
			{
				if (numero<0)
				{
					sumaNegativos=numero+sumaNegativos;
					cantidadNegativos++;
				}	else
					{
						
					}
			}











		respuesta = prompt ("Indique con un 'si' si desea seguir ingresando un numero, de lo contrario ingrese un 'no'");
	
	}




}//FIN DE LA FUNCIÓN