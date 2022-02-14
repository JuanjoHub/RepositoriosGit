class Calculadora {


    constructor() {

        this.numero1 = 0;
        this.numero2 = 0;
        this.result = 0;
    }

    set resultado(op1) {

        if (op1 == 1) {
            this.result =+ this.numero1 + +this.numero2;
            alert(this.result);
        } else if (op1 == 2) {
            this.result = this.numero1 - this.numero2;
        }

    }
    get resultado() {

        document.getElementById("result").innerHTML=this.result;

    }
    introducirDatos() {
        this.numero1 = prompt("introduce un numero");
        this.numero2 = prompt("introduce un numero");
    }


}

function operaciones(op1) {
    calculadora1 = new Calculadora();
    calculadora1.introducirDatos();
    calculadora1.resultado=op1;
    calculadora1.resultado;
}