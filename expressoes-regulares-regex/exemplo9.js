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

Quantificadores – 
Parte 1 Os quantificadores podem ser aplicados a caracteres, 
grupos, conjuntos ou metacaracteres. 
{n} – Quantifica um número específico 
{n,} – Quantifica um número mínimo 
{n,m} – Quantifica um número mínimo e um número máximo

Quantificadores
- Parte 2 Os quantificadores podem ser aplicados a caracteres, 
grupos, conjuntos ou metacaracteres. 
? – Zero ou um 
* – Zero ou mais 
* + – Um ou mais
*/

var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/; // Expressão [0-9] representa que teremos numeros de 0 a 9 e {4,5} seria representação de 4 a 5 numeros; Expressão (<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+ significa que ()+ dentro dos parenteses há um grupo e o + que poderam haver mais 

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(regExp.test(telefone));