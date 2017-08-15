// Valida telefone 

/*
Metacaracteres 
. – Representa qualquer caractere 
\w – Representa o conjunto [a-zA-Z0-9_] 
\W – Representa o conjunto [^a-zA-Z0-9_] 
\d – Representa o conjunto [0-9] 
\D – Representa o conjunto [^0-9] 
\s – Representa um espaço em branco 
\S – Representa um não espaço em branco 
\n – Representa uma quebra de linha 
\t – Representa um tab

Quantificadores
- Parte 2 Os quantificadores podem ser aplicados a caracteres, 
grupos, conjuntos ou metacaracteres. 
? – Zero ou um 
* – Zero ou mais 
* + – Um ou mais
* 
*/

/* Modificadores
i - Case-insensitive matching - Flexibilizar se é letra maiuscula ou minuscula
g - Global matching - percore tudo, não pare na primeira, siga fazendo o match
m - Multiline matching - Caso tenha quebra de linhas
*/

var regExp1 = /\(\d{2}\)\s\d{4,5}-?\d{4}/g; // Retorna o primeiro dos telefones informados na tabela abaixo
var regExp2 = /\(\d{2}\)/g;
var regExp3 = /\d{4,5}-?\d{4}/g;


var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log("Números completos: "+telefone.match(regExp1));
console.log("DDD's: "+telefone.match(regExp2));
console.log("Números"+telefone.match(regExp3));
