var capa=document.getElementById("capa");

//el ratón entra en la capa
capa.addEventListener("mouseenter", (ev)=>{
    capa.style.backgroundColor="green";
});

//el ratón sale de la capa
capa.addEventListener("mouseleave", (ev)=>{
    capa.style.backgroundColor="transparent";

});

//se aprieta el botón principal sobre la capa

capa.addEventListener("mousedown",(ev)=>{
    if(ev.button==0)
        capa.style.backgroundColor="red";
    else if(ev.button==2)
        capa.style.backgroundColor="blue";      
});

//se suelta el boton principal sobre la capa
capa.addEventListener("mouseup",(ev)=>{

    capa.style.backgroundColor="green";

});

//se intenta sacar el menú de contexto, acción que se provoca
//con el botón secundario, pero que se debe anular aparte
capa.addEventListener("contextmenu", (ev)=>{
    ev.preventDefault();
})