function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom=Math.floor(Math.random() * 10) + 1;

	if (numeroRandom>8)
	{
		alert ("Exelente "+numeroRandom);
	} else
	{
		if (numeroRandom>3) 
		{
			alert ("Aprobo "+numeroRandom);

		} else

		{
			alert ("Vamos, la proxima se puede "+numeroRandom)
		}
	}



}//FIN DE LA FUNCIÓN