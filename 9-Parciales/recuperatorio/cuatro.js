	function Mostrar()
{
	var numero1;
	var numero2;
	var suma;

	numero1=prompt("Ingrese un numero");
	numero1=parseInt (numero1)
	numero2=prompt ("ingrese un numero");
	numero2=parseInt(numero2);

	suma=numero1+numero2;

	if(suma==0)
	{
		alert("La suma da CERO");
	}	else
		{
			if(suma>0)
			{
				alert ("La suma da positivo");
			}	else
				{
					alert ("La suma da negativo");
				}
		}

}
