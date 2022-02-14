function juego(){
    var contador=1;
    var intentos=10;
    var oportunidades=1;

    var aleatorio = Math.round(Math.random()*100);
    
    console.log(aleatorio);

    valor1 = prompt("Introduce un valor entre 1 y 100 tienes 10 intentos");

         while(contador<10 && valor1!=null){


            if(valor1==aleatorio){
                    break;
            
            }else if(valor1>aleatorio){
                    contador++;
                    valor1=prompt("Mala suerte, el numero es menor! te quedan " + (intentos=intentos-oportunidades) + " intentos, introduce otro numero");
                    
            }else if(valor1<aleatorio){
                contador++;
                valor1=prompt("Mala suerte, el numero es mayor! te quedan " + (intentos=intentos-oportunidades) + " intentos, introduce otro numero");

            }

        }

            if(valor1==aleatorio){
                document.write("¡Has acertado! el numero aleatorio era: " + aleatorio);
            }else{
                document.write("¡GAME OVER! <br> el numero aletorio era: " + aleatorio + "<br>" + "tu numero de intentos ha sido:"  + contador);

            }
}
