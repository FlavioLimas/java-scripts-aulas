var regExp = /^\(48\) 9999-9999$/; // Em regegex o caractere \ seria para declarar a proxima expressão como carctere literal, pois carcterer especiais tem representação no regex
var telefone = "(48) 9999-9999";
console.log(regExp.test(telefone));
