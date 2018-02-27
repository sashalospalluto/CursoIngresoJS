	function Mostrar()
{
	var mes;

	mes=prompt ("ingrese un mes");

	switch (mes)
	{
		case "diciembre":
		case "Diciembre":

		alert("Se vienen las fiestas");
		break;

		case "Enero":
		case "enero":

		alert("Comienza el año");
		break;

		default:

		alert("no es enero, ni diciembre")
		break;
	}

}
