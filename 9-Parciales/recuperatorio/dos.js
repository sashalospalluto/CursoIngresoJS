	function Mostrar()
{
	var importe;
	var importeConDescuento;

	importe=prompt ("Ingrese el importe del producto");
	importe=parseInt(importe);

	importeConDescuento=importe-(importe*25)/100;

	document.getElementById('importeFinal').value=importeConDescuento;
  
}
