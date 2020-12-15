//Dado 10 caras 
function tirarDados(min, max) {
var dados = Math.round(Math.random() * (max - min)) + 1;
return dados;
}
tirarDados(1, 10);



//Calculadora IVA
function ivaCalculator (money) {
    var ivaCalculator = money * iva; 
    return alert("Tienes que pagar " + ivaCalculator + " euros de iva.")
}

var iva = 0.21;
ivaCalculator (2500);



//Golpe impacto
function tirarDados(min, max) {
var dados = Math.round(Math.random() * (max - min)) + 1;

if (dados >= 6) {
    return true; 
    }
    else {return false;
    }
}

tirarDados(1, 10);
