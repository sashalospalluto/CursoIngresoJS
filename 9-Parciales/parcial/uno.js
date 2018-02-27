
function Mostrar() //altura base, 
{
	var base;
	var perimetro;
	var altura;
	var superficie;

	base = document.getElementById('laBase').value;
	altura= prompt ("ingrese la altura del triangulo");
	base=parseInt (base);
	altura=parseInt(altura);
	perimetro = base+base+base;
	superficie= (base*altura)/2;
	alert ("Su perimetro es: "+perimetro);
	alert ("La superficie es: "+superficie);

}
