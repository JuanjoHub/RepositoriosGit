function salario(){

var nombre = prompt("Introduce el nombre");
var apellido = prompt("Introduce el apellido");
var salario = prompt("Introduce el salario");
var edad = prompt("Introduce la edad");
var porcentajeMas45=0;
var porcentajeMenos45=0;
var total=0;

document.write("El nombre introducido es: " + nombre + "<br>");
document.write("El apellido introducido es: " + apellido + "<br>");
document.write("El salario introducido es: " + salario + "<br>");
document.write("La edad introducida es: " + edad + "<br>");


    /*******************SALARIO MAYOR DE 2000 *******************/
    if(salario>2000){
        document.write("Ya cobras mucho");
    }

     /*******************SALARIO ENTRE 1000 Y 2000 *******************/
    if(salario>=1000 && salario<=2000){

        if(edad>45){

            porcentajeMas45=((salario*3)/100);
            total=+salario + +porcentajeMas45;
            document.write("Eres menor de 45 años y tu salario esta entre 1000 y 2000 tu salario ahora es de: " + total.toFixed(2) + "€");

        }else if(edad<45){
            
            porcentajeMenos45=((salario*10)/100);
            total=(+salario + +porcentajeMenos45);
            document.write("Eres menor de 45 años y tu salario esta entre 1000 y 2000 tu salario ahora es de: " + total.toFixed(2) + "€");
        }
    }
    /*******************SALARIO MENOR DE 1000 *******************/
    if(salario<1000){

        if(edad<30){

            salario=1100;
            document.write("Eres menor de 30 años y tu salario es menor de 1000€, tu sueldo ahora es de: " + salario) + "€";

        }else if(edad>=30 || edad<=45){

            porcentajeMenos45=(salario*3)/100;
            total=+salario + +porcentajeMenos45;
            document.write("Tu edad esta entre 30 y 45 años tu salario ahora es: " + salario + "€");

        }else if(edad>45){

            porcentajeMas45=(salario*3)/100;
            total=+salario + +porcentajeMas45;
            document.write("Eres mayor de 45 años y tu salario es menor de 1000€ tu salario ahora es de: " + salario + "€");

        }

    }

}