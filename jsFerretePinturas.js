/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaF;
	var temperaturaC; 

	temperaturaF= document.getElementById('Temperatura').value;

	temperaturaC= (temperaturaF-32)*0.5555555555556;

	alert (temperaturaF+" fahrenheit son "+temperaturaC+" centigrados");


}

function CentigradosFahrenheit () 
{
	var temperaturaF;
	var temperaturaC; 

	temperaturaC= document.getElementById('Temperatura').value;

	temperaturaF= (1.8*temperaturaC)+32;

	alert (temperaturaC+" centigrados son "+temperaturaF+" fahrenheit");
	
}
