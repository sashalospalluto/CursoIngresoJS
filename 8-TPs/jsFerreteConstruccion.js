/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var TotalAlambre;

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	TotalAlambre= (((2*largo)+(2*ancho))*3);

	alert ("el total de alambre que se debe utilizar son "+TotalAlambre+" metros");

}
function Circulo () 
{
	var radio;
	var TotalAlambre;

	radio = document.getElementById('Radio').value;

	TotalAlambre= ((2*3.14*radio)*3);

	alert ("el total de alambre que se debe utilizar son "+TotalAlambre+" metros");

}

function Materiales () 
{
	var ancho;
	var largo
	var cemento;
	var cal;

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;

	cemento= (ancho*largo)*2;
	cal= (ancho*largo)*3;

	alert ("Para un terreno de "+ancho+"x"+largo+" se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");



}