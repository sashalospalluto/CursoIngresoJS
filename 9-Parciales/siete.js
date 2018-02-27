//ingresar: letra y numero (-50 y +50)
// a. promedio de los numeros positivos
//b. cant de numeros impares
//c.Suma de todos los numeros cuya letra es una vocal
//d. numero maximo y la letra con la que se ingreso

function Mostrar()
{
	var numero;
	var letra;
	var promedio;
	var sumaNumeros=0;
	var contadorNumero=0;
	var opcion="si";
	var numerosImpares=0;
	var sumaNumerosConVocal=0;
	var maximo=0;
	var letraMaxima;

	while (opcion!="no")
	{
		numero =prompt ("ingrese un numero");
		numero=parseInt(numero);

		while (isNaN(numero))
		{
			numero =prompt ("ingrese un numero VALIDO");
			numero=parseInt(numero);
		}

		if (numero>-50 && numero<50)
		{
			contadorNumero++;
			sumaNumeros=sumaNumeros+numero;
		}

		letra=prompt("ingrese una letra");

		while (!isNaN(letra))
		{
			letra=prompt("ingrese una letra VALIDA");
		}

		if (numero%2!=0 && numero!=0)
		{
			numerosImpares++;
		}

		if (letra=="a" || letra=="e" ||letra=="i" ||letra=="o" ||letra=="u" )
		{
			sumaNumerosConVocal=numero+sumaNumerosConVocal;
		}

		if (maximo<numero)
		{
			maximo=numero;
			letraMaxima=letra;
		}

	opcion=prompt ("NO para salir")

	}

	promedio=sumaNumeros/contadorNumero;

	document.write ("<br> la letra es "+letra);
	document.write ("<br> el numero es "+numero);
	document.write ("<br> El promedio es "+promedio);
	document.write ("<br> Hay "+numerosImpares+" numeros impares");
	document.write ("<br> la suma de numeros cuya letra es una vocal es "+sumaNumerosConVocal);
	document.write ("<br> El numero maximo es "+maximo+ " y su letra es "+letraMaxima);

}
