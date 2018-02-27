	function Mostrar()
{
	var peso=-1;
	var masPesado;
	var masLiviano;


	for(contador=0; contador<5;contador++)
	{
		peso=prompt("ingrese el peso");
		peso=parseInt(peso);

		while (peso<0 || isNaN(peso))
		{
			peso=prompt("ingrese el peso CORRECTO");
			peso=parseInt(peso);
		}

		if (contador==0)
		{
			masPesado=peso;
			masLiviano=peso;
		}	else
			{
				if(peso>masPesado)
				{
					masPesado=peso;
				}	else
					{
						if(peso<masLiviano)
						{
							masLiviano=peso;
						}
					}
			}

		
	} 

	alert("El mas pesado fue "+masPesado);
	alert ("el mas liviano fue: "+masLiviano);



}
