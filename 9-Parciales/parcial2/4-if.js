// se ingresan 2 numero
// si son iguales se concatenan
//si el primero es mayor que el segundo, se *
// if 2>1 se -
// si la * da par, mostrar el resultado y mostrar alert "es par"
//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
	var numero2;
	var iguales;
	var primeroMayor;
	var segundoMayor;

	numero1=prompt("ingrese el primer numero");
	numero2=prompt("ingrese el segundo numero");

	if(numero1==numero2)
	{
		iguales=numero1+numero2;
		alert("Son iguales "+iguales);

	}	else
		{
			numero2=parseInt(numero2);
			numero1=parseInt(numero1);
			if(numero1>numero2)
			{
				primeroMayor=numero1*numero2;
				alert ("El primero es mayor, se multiplica y da: "+primeroMayor);

				if (primeroMayor%2==0 && primeroMayor!=0)
				{
					alert ("El primero es mayor, se multiplica y da: "+primeroMayor+", ademas es PAR");
				}
			}	else
				{
					if (numero2>numero1)
					{
						segundoMayor=numero1-numero2;
						alert("El segundo es mayor, se resta y da: "+segundoMayor);

					}
				}
		}


	
}

