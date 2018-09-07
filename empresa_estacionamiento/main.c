#include <stdio.h>
#include <stdlib.h>

int main()
{
    char seguir='s';
    int opcion;
    char decision;
    int cantEstacionados=10;
    int cantDisponible=90;
    int precioEstadia;
    int ganancia=0;


    while (seguir=='s')
    {
        printf("\t\tMENU");
        printf("\n\n1-Notificar ingreso de un auto");
        printf("\n\n2-Notificar egreso de un auto");
        printf("\n\n3-Consultar lugares disponibles");
        printf("\n\n4-Consultar cantidad de autos actualmente estacionados");
        printf("\n\n5-Establecer precio de la estadia");
        printf("\n\n6-Calcular la ganancia del dia")
        printf("\n\n7-salir")

        do
        {
            printf("\n\t\tingrese opcion: ");
            scanf("\n%d",&opcion);
        } while (opcion<1 || opcion>7);

        switch (opcion)
        {
        case 1:

            system("cls");
            funcionIngreso(cantEstacionados,cantDisponible);
            break;

        case 2:

            system("cls");
            funcionEgreso(cantEstacionados,cantDisponible);
            break;

        case 3:

            system("cls");
            printf("La cantidad de espacio disponible es: %d",&cantDisponible);
            break;

        case 4:

            system("cls");
            printf("La cantidad de autos estacionados es: %d",&cantEstacionados);
            break;

        case 5:

            system("cls");
            printf("ingrese el precio de la estadia: ");
            scanf("%d",precioEstadia);
            break;
        case 6:

            system("cls");
            funcionGanancia(precioEstadia,cantEstacionados,ganancia);
            system("pause");
            break;
        case 7:

            seguir='n';
            break;

        }
    }

    return 0;
}
