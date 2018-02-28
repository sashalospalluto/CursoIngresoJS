//nombre de animal
//peso animal (+0kg)
//temperatura del habitat (-40 a +40)

//informar: cantidad de temperaturas pares ingresadas
//cant de temperatura impar
//nombre del animal mas pesado
//nombre del animal menos pesado
//cantidad de animales cuyo habitat tiene menos de 0 grados
//promedio de peso de todos los animales
//temperatura maxima y minima


	function Mostrar()
{
	var NombreAnimal;
	var pesoAnimal;
	var temperatura;
	var opcion="";
	var temperaturasPar=0;
	var temperaturasImpar=0;
	var pesoMaximo=0;
	var nombreMasPesado;
	var pesoMinimo;
	var nombreMenosPesado;
	var contador=0;
	var habitatBajoCero=0;
	var sumaPesos;
	var promedioPeso;
	var temperaturaMaxima;
	var temperaturaMinima;


	while (opcion!="no")
	{
		contador++;
		NombreAnimal=prompt("Ingrese el nombre del animal");
		while(!isNaN(NombreAnimal))
		{
			NombreAnimal=prompt("Ingrese el nombre del animal CORRECTAMENTE");
		}

		pesoAnimal=prompt("Ingrese el peso");
		pesoAnimal=parseInt(pesoAnimal);

		while(pesoAnimal<=0 || isNaN(pesoAnimal))
		{
			pesoAnimal=prompt("Ingrese el peso CORRECTAMENTE");
			pesoAnimal=parseInt(pesoAnimal);		
		}

		sumaPesos=sumaPesos+pesoAnimal

		if (contador==1)
		{
			pesoMaximo=pesoAnimal;
			pesoMinimo=pesoAnimal;

		}	else
			{
				if(pesoAnimal>pesoMaximo)
				{
					pesoMaximo=pesoAnimal;
					nombreMasPesado=NombreAnimal;
				}	else
					{
						if(pesoAnimal<pesoMinimo)
						{
							pesoMinimo=pesoAnimal;
							nombreMenosPesado=NombreAnimal;
						}
					}
			}

		temperatura=prompt("Ingrese la temperatura del habitat");
		temperatura=parseInt(temperatura);

		while (temperatura<-40 || temperatura>40 || isNaN(temperatura))
		{
			temperatura=prompt("Ingrese la temperatura del habitat CORRECTAMENTE");
			temperatura=parseInt(temperatura);

		}

		if (temperatura%2==0 && temperatura!=0)
		{
			temperaturasPar++;
		}	else
			{
				if(temperatura%2!=0 && temperatura!=0)
				{
					temperaturasImpar++;
				}
			}
		if (temperatura<0)
		{
			habitatBajoCero++;
		}

		if (contador==1)
		{
			temperaturaMaxima=temperatura;
			temperaturaMinima=temperatura;
		}	else
			{
				if (temperatura>temperaturaMaxima)
				{
					temperaturaMaxima=temperatura
				}	else
					{
						if (temperatura<temperaturaMinima)
						{
							temperaturaMinima=temperatura
						}
					}
			}



		opcion=prompt("'no' para salir");

	}

	promedioPeso=sumaPesos/contador;

	document.write ("La cantidad de temperaturas impar son: "+temperaturasImpar);
	document.write ("La cantidad de temperaturas par son "+temperaturasPar);
	document.write ("El nombre del animal mas pesado es: "+nombreMasPesado+ "con "+pesoMaximo+" kg");
	document.write ("El nombre del animal mas liviano es: "+nombreMenosPesado+ "con "+pesoMinimo+" kg");
	document.write ("El promedio del peso de todos los animales es "+promedioPeso+" kg");
	document.write ("La temperatura maxima es: "+temperaturaMaxima);
	document.write ("La temperatura minima es: "+temperaturaMinima);



}


































































/*
// SE PIDE:
// 1. cantidad de alumnos
// 2. promedio total de las notas
// 3.cantidad de mujeres
// 4. cantidad de varones
// 5. saber la cantidad de varones desaprobados
// 6. nombre del alumno con mayor nota
// 7. Promedio de nota de las mujeres
//   Ingresar edad
// 8. ingresar el sexo del alumno mas chico
// 9. promedio de las edades de los aprobados
// 10.cantidad de notas pares
// 11.cantidad de notas impares

	function Mostrar()
{
	var nombreAlumno;
	var sumaAlumno=0;
	var notaAlumno;
	var sumaNotaAlumno=0;
	var promedio;
	var cantidadDeAlumnos=0;
	var opcion="si";
	var cantidadDeVarones=0;
	var cantidadDeMujeres=0;
	var sexo;

	var varonesDesaprobados=0;

	var notaMaxima=0;
	var MejorAlumno;

	var promedioMujeres;
	var sumaNotaMujeres=0;

	var edad;
	var menorEdad=110;
	var SexoMenorEdad;
	var sumaEdadesAprobados=0;
	var promedioEdadesAprobados;
	var contadoredades=0;
	var notasPares=0;
	var notasImpares=0;




	while (opcion!="no")
	{
		nombreAlumno = prompt ("ingrese el nombre de un alumno");
		cantidadDeAlumnos++;
		notaAlumno = prompt ("ingrese nota de un alumno");
		notaAlumno=parseInt(notaAlumno);

		while (notaAlumno<0 || notaAlumno>10)
		{
			notaAlumno = prompt ("ingrese nota de un alumno VALIDA");
			notaAlumno=parseInt(notaAlumno);
		}

		sumaNotaAlumno= sumaNotaAlumno+notaAlumno;

		sexo=prompt ("ingrese sexo (m o f): ");

		while (sexo != "m" && sexo!= "f")
		{
			sexo=prompt ("ingrese sexo VALIDO");
		}

		if (sexo=="f")
		{
			cantidadDeMujeres++;
			sumaNotaMujeres=sumaNotaMujeres+notaAlumno; //suma de notas mujeres
		}	else 
			{
				cantidadDeVarones++;
			}

		if (notaAlumno<4 && sexo=="m")
		{
			varonesDesaprobados++;
		}
		
		if (notaMaxima<notaAlumno)
		{
			notaMaxima=notaAlumno;
			MejorAlumno=nombreAlumno;
		}

		edad=prompt("ingrese la edad");
		edad=parseInt(edad);


		while (edad<0 || edad>100)
		{
			edad=prompt("ingrese la edad VALIDA");
			edad=parseInt(edad);
		}

		if (edad<menorEdad)
		{
			menorEdad=edad;
			SexoMenorEdad=sexo;
		}

		if (notaAlumno>=4)
		{
			sumaEdadesAprobados= sumaEdadesAprobados+edad;
			contadoredades++;
		}

		if (notaAlumno==0)
		{

		}	else 
			{
				if (notaAlumno%2==0)
				{
					notasPares++;
				}	else
					{
					notasImpares++;
					}

			}
		opcion = prompt ("NO para salir");

	}

	promedio = sumaNotaAlumno /cantidadDeAlumnos;
	promedioMujeres= sumaNotaMujeres/cantidadDeMujeres;
	promedioEdadesAprobados= sumaEdadesAprobados/contadoredades;

	document.write ("<br> Son: "+cantidadDeAlumnos+ " alumnos");
	document.write ("<br> El promedio de notas de "+cantidadDeAlumnos+ " alumnos es "+promedio);
	document.write ("<br> Son: "+cantidadDeVarones+ " varones");
	document.write ("<br> Son: "+cantidadDeMujeres+ " mujeres");
	document.write ("<br> "+varonesDesaprobados+ " hombres son los desaprobados");
	document.write ("<br> El alumno con mayor nota es "+MejorAlumno+" y su nota es "+notaMaxima);
	document.write ("<br> El promedio de las notas de las mujeres es: "+promedioMujeres);
	document.write ("<br> El sexo del alumno mas chico es: "+SexoMenorEdad);
	document.write ("<br> el promedio de las edades de los alumnos aprobados es: "+promedioEdadesAprobados);
	document.write ("<br> La cantidad de notas pares es: "+notasPares);
	document.write ("<br> La cantidad de notas impares es: "+notasImpares);





	
}
*/
