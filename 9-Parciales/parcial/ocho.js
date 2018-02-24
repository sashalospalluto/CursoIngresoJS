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
