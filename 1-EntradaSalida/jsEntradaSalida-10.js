/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var resultadoDescuento;

	importe = document.getElementById('importe').value;

	importe = parseInt (importe);

	resultadoDescuento = importe-(25*importe/100);

	document.getElementById('resultado').value = resultadoDescuento;

}
