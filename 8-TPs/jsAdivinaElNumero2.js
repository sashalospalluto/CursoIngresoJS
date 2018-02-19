/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

contadorIntentos=0

function comenzar()
{

	//Genero el número RANDOM entre 1 y 100
		numeroSecreto=Math.floor(Math.random() * 100)+1; 
	 
		//alert(numeroSecreto );

		console.log (numeroSecreto);
	

}

function verificar()
{
	var numeroIngresado;
	var diferenciaNumero;

	numeroIngresado=document.getElementById('numero').value;
	contadorIntentos++;
	document.getElementById('intentos').value=contadorIntentos;
	
	if (numeroIngresado==numeroSecreto)
	{
		switch (contadorIntentos)
		{
			case 1:
				alert ("usted es un Psíquico");
				break;
				
			case 2:
				alert ("exelente percepcion");
				break;

			case 3:
				alert ("Esto es suerte");
				break;

			case 4:
				alert ("Exelente tecnica");
				break;

			case 5:
				alert ("Usted esta en la media");
				break;

			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert ("Falta Tecnica");

			default:
				alert ("Afortunado en el amor");
				break;
		}
	}

	else if (numeroIngresado>numeroSecreto)
	{
		diferenciaNumero = numeroIngresado-numeroSecreto;

		alert ("Se paso por "+diferenciaNumero);
	}	else
		{
			diferenciaNumero = numeroSecreto-numeroIngresado;

		    alert ("Le falta "+diferenciaNumero);
		}
}