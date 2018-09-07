#include <stdio.h>
#include <stdlib.h>
#include "funciones.h"

void funcionIngreso (int autosEstacionados,int espacioDisponible)
{
    char decision;
    printf("\nSeguro que desea ingresar un auto?(ingrese S o N) ");
    scanf("\n%c",&decision);
    if (decision=='s')
    {
        *autosEstacionados= *autosEstacionados+1;
        *espacioDisponible= *espacioDisponible-1;

        printf("Auto ingresado correctamente");
    }
}

void funcionEgreso (int autosEstacionados, int espacioDisponible)
{
    char decision;
    printf("\nSeguro que desea ingresar un auto?(ingrese S o N) ");
    scanf("\n%c",decision);
    if (decision=='s')
    {
        *autosEstacionados=*autosEstacionados-1;
        *espacioDisponible=*espacioDisponible+1;

        printf("Auto ingresado correctamente");
    }
}

void funcionGanancia (int precioE,int autosEstacionados,int ganancia)
{
    ganancia=precioE*autosEstacionados;
    printf("La ganancia del dia es: $%d",ganancia);
}
