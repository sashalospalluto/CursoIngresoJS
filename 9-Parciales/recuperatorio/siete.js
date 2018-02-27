	function Mostrar()
{
	var edad;
	var sexo;
	var promedioEdad;
	var cantidadMayores=0;
	var contadorEdad=0;
	var menorEdad;

	for (contador=0;contador<10;contador++)
	{
		edad=prompt("ingrese la edad")
		edad=parseInt(edad);

		while (edad<0 || edad>100)
		{
			edad=prompt("ingrese la edad CORRECTA")
			edad=parseInt(edad);			
		}

		contadorEdad++;

		if(contador==0)
		{
			menorEdad=edad;
		}	else
			{
				if(edad<menorEdad)
				{
					menorEdad=edad;
				}
			}

		sexo=prompt("Ingrese f o m");

		while (sexo!="m" && sexo!="f")
		{
			sexo=prompt("Ingrese f o m CORRECTAMENTE");
		}

		if(edad>=20 && sexo=="m")
		{
			cantidadMayores++;
		}

	}

	promedioEdad=contadorEdad/10;

	alert("El promedio de la edad es: "+promedioEdad);
	alert("la edad mas baja es: "+menorEdad);
	alert ("los varones mayores o iguales a 20 son: "+cantidadMayores);




}
