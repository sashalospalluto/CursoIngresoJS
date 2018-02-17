/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precioFinal;
 	var cantidad;
 	var marca;
 	var precioUni;
 	var precioBruto;
 	var porcentajeDesc;
 	var iibb //ingresos brutos

 	precioUni=35;
 	porcentajeDesc=0;

 	cantidad= document.getElementById('Cantidad').value;
 	marca= document.getElementById('Marca').value;

 	precioBruto=cantidad*precioUni; //es por si cambia el precio unitario
 	
 	if(cantidad>5)
 	{
 		precioFinal=cantidad*35*0.5;

 	}   else
 		{
 			if (cantidad==5)
 			{
 				if (marce== "ArgentinaLuz")
 				{
 					porcentajeDesc=0.4;
 				} else
 				  {
 				  	porcentajeDesc=0.3;
 				  }

 			} else
 			  {
 			  	if (cantidad==4)
 			  	{
 			  		if (marca== "ArgentinaLuz"|| marca== "FelipeLamparas")
 			  		{
 			  			porcentajeDesc=0.25;
 			  		} else
 			  		  {
 			  		  	porcentajeDesc=0.2;
 			  		  }
 			  	}
 			  }
 		}
 	precioFinal= cantidad*precioUni*porcentajeDesc;
 	if (precioFinal>120)
 	{
 		iibb= precioFinal*0.1;
 		precioFinal=precioFinal+precioFinal*0.1;
 	}

 	document.getElementById('')
}
