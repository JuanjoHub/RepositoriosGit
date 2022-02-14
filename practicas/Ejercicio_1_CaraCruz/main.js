const caraCruz = new Promise(function(resolve,reject){
    
    numeroAleatorio =  Math.floor(Math.random()*2);
        if(numeroAleatorio==0){
            resolve("Cara");
        }
        else{
            reject("Cruz");
        }
    }
);

caraCruz
    .then( (resolveMsg)=> {console.log(resolveMsg); } )
    .catch( (err) => {console.log(err);} );
console.log(caraCruz);