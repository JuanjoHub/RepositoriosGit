function random_bg() {
    var rojo = Math.floor(Math.random() * 256);
    var verde = Math.floor(Math.random() * 256);
    var azul = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + rojo + "," + verde + "," + azul + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg();

