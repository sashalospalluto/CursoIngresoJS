//ingresar 3 numero e ingresar el mayor

function Mostrar()
{
	var numero1;
	var numero2;
	var numero3;

	numero1=prompt ("ingrese un numero");
	numero1=parseInt (numero1);
	numero2=prompt ("ingrese un numero");
	numero2=parseInt (numero2);
	numero3=prompt ("ingrese un numero");
	numero3=parseInt (numero3);

	if (numero1==numero2)
	{
		if(numero1==numero3)
		{
			alert ("los tres numeros son iguales");
		}
	} 

	if (numero1<numero2 && numero1<numero3)
	{
		alert ("el numero mas chico es: "+numero1);

		if (numero2>numero3)
		{
			alert ("el numero "+numero2+" es el numero mas grande");
		}	else
			{
				alert ("el numero "+numero3+" es el numero mas grande");
			}
	}	else 
		{
			if (numero2<numero3 && numero2<numero1)
			{
				alert ("el numero mas chico es: "+numero2);

				if (numero1>numero3)
				{
					alert ("el numero "+numero1+" es el numero mas grande");
				}	else
					{
						alert ("el numero "+numero3+" es el numero mas grande");
					}
			}	else
				{
					if (numero3<numero1 && numero3<numero2)
					{
						alert ("el numero mas chico es: "+numero3);

						if(numero1>numero2)
						{
							alert ("el numero "+numero1+" es el numero mas grande");

						}	else
							{
								alert ("el numero "+numero2+" es el numero mas grande");
							}
					}
				}

		}


}
