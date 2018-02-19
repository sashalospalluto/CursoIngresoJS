	function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while (sexo!="f" && sexo!="m")
	{
		alert ("Sexo invalido, vuelva a ingresar");
		sexo = prompt("ingrese f ó m .");
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN