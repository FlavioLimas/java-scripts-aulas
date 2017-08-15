/*
Grupos de caracteres 
[abc] – Aceita qualquer caractere dentro do grupo, nesse caso a, b e c 
[^abc] – Não aceita qualquer caractere dentro do grupo, nesse 
caso a, b ou c 
[0-9] – Aceita qualquer caractere entre 0 e 9 
[^0-9] – Não aceita qualquer caractere entre 0 e 9
*/

var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/; // Em regegex o caractere \ seria para declarar a proxima expressão como carctere literal, pois carcterer especiais tem representação no regex
var telefone = "(80) 9876-1234";
console.log(regExp.test(telefone));
// console.log(regExp.exec(telefone));