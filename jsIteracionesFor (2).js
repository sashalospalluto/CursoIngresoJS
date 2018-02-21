function Mostrar()
{
	var numeroRandom;
	var contadorCero=0;
	var contadorUno=0;
	var contadorDos=0;
	var contadorTres=0;
	var contadorCuatro=0;
	var contadorCinco=0;
	var contadorSeis=0;
	var contadorSiete=0;
	var contadorOcho=0;
	var contadorNueve=0;
	var porcen0;
	var porcen1;
	var porcen2;
	var porcen3;
	var porcen4;
	var porcen5;
	var porcen6;
	var porcen7;
	var porcen8;
	var porcen9;
	var iteraciones=100000


	for (contador=0;contador<iteraciones;contador++)
	{
		numeroRandom = Math.floor(Math.random() * 10);

		switch (numeroRandom)
		{
			case 0:
				contadorCero++;
				break;
			case 1:
				contadorUno++;
				break;

			case 2:
				contadorDos++;
				break;

			case 3:
				contadorTres++;
				break;

			case 4:
				contadorCuatro++;
				break;

			case 5:
				contadorCinco++;
				break;

			case 6:
				porcen6= (contadorSeis/(iteraciones))*100;
				if (porcen6>7)
				{
					contador--;
					continue;

				}	else
					{
						contadorSeis++;
					}

				break;

			case 7:
				contadorSiete++;
				break;

			case 8:
				contadorOcho++;
				break;

			case 9:
				contadorNueve++;
				break;

		}
	}

		porcen1= (contadorUno/(contador+1))*100;
		porcen1=(porcen1); //sirve para redondear
		document.write ("<br>Cantidad de 1: "+contadorUno+ "% :"+porcen1);

		porcen2= (contadorDos/(contador+1))*100;
		porcen2=(porcen2); //sirve para redondear
		document.write ("<br>Cantidad de 2: "+contadorDos+ "% :"+porcen2);

		porcen3= (contadorTres/(contador+1))*100;
		porcen3=(porcen3); //sirve para redondear
		document.write ("<br>Cantidad de 3: "+contadorTres+ "% :"+porcen3);

		porcen4= (contadorCuatro/(contador+1))*100;
		porcen4=(porcen4); //sirve para redondear
		document.write ("<br>Cantidad de 4: "+contadorCuatro+ "% :"+porcen4);

		porcen5= (contadorCinco/(contador+1))*100;
		porcen5=(porcen5); //sirve para redondear
		document.write ("<br>Cantidad de 5: "+contadorCinco+ "% :"+porcen5);

		porcen6= (contadorSeis/(contador+1))*100;
		porcen6=(porcen6); //sirve para redondear
		document.write ("<br>Cantidad de 6: "+contadorSeis+ "% :"+porcen6);

		porcen7= (contadorSiete/(contador+1))*100;
		porcen7=(porcen7); //sirve para redondear
		document.write ("<br>Cantidad de 7: "+contadorSiete+ "% :"+porcen7);

		porcen8= (contadorOcho/(contador+1))*100;
		porcen8=(porcen8); //sirve para redondear
		document.write ("<br>Cantidad de 8: "+contadorOcho+ "% :"+porcen8);

		porcen9= (contadorNueve/(contador+1))*100;
		porcen9=(porcen9); //sirve para redondear
		document.write ("<br>Cantidad de 9: "+contadorNueve+ "% :"+porcen9);
		
		porcen0= (contadorCero/(contador+1))*100;
		porcen0=(porcen0); //sirve para redondear
		document.write ("<br>Cantidad de 0: "+contadorCero+ "% :"+porcen0);
	
}