//Dado 10 caras 
function tirarDados(min, max) {
var dados = Math.round(Math.random() * (max - min)) + 1;
return dados;
}
tirarDados(1, 10);



//Calculadora IVA
function IVACalculator (money) {
    var IVACalculator = money * IVA; 
    return alert("Tienes que pagar " + IVACalculator + " euros de IVA.")
}

var IVA = 0.21;
