function Mostrar()
{
//tomo la edad  
 var edad;
 var estadoCivil;

 edad= document.getElementById('edad').value;
 estadoCivil= document.getElementById('estadoCivil').value;

 if (edad<18 && estadoCivil==Casado || estadoCivil==Divorciado) 
  {
  	  	alert ("usted es muy pequeño para no ser soltero");
  }
	
}//FIN DE LA FUNCIÓN