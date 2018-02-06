/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var total;

	precio1 = document.getElementById('PrecioUno').value;
	precio2 = document.getElementById('PrecioDos').value;
	precio3 = document.getElementById('PrecioTres').value;

	total= precio1  + precio2 + precio3;

	alert ("El precio total es"+total);

}

function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var promedio;

	precio1 = document.getElementById('PrecioUno').value;
	precio2 = document.getElementById('PrecioDos').value;
	precio3 = document.getElementById('PrecioTres').value;

	promedio=(precio+precio2+precio3)/3;

	alert ("Su promedio es: "+promedio);


}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var total;
	var totalconiva;
	

	precio1 = document.getElementById('PrecioUno').value;
	precio2 = document.getElementById('PrecioDos').value;
	precio3 = document.getElementById('PrecioTres').value;

	total=precio1+precio2+precio3;
	totalconiva= 21*total/100;

	alert ("El precio final con iva es "+totalconiva);

}