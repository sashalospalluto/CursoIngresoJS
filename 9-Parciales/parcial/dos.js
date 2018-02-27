//mostrar resultado, pedir precio y %de descuento que se va a hacer. mostrar el precio final

function Mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio= prompt ("Ingrese el precio del producto");
	precio=parseInt(precio);

	descuento= prompt ("ingrese el descuento del producto");
	descuento=parseInt(descuento);

	

	precioFinal= precio - (precio*descuento/100);

	document.getElementById('importeFinal').value=precioFinal;   
}
