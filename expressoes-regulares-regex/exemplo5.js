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

Grupos de caracteres 
[abc] – Aceita qualquer caractere dentro do grupo, nesse caso a, b e c 
[^abc] – Não aceita qualquer caractere dentro do grupo, nesse 
caso a, b ou c 
[0-9] – Aceita qualquer caractere entre 0 e 9 
[^0-9] – Não aceita qualquer caractere entre 0 e 9

Quantificadores
- Parte 2 Os quantificadores podem ser aplicados a caracteres, 
grupos, conjuntos ou metacaracteres. 
? – Zero ou um 
* – Zero ou mais 
* + – Um ou mais
*/
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/; // Expressão [0-9] representa uma sequencia de caractere de 0 a 9 e {2} representa que terá 2 casas decimais
var telefone = "(80) 9876-1234";
console.log(regExp.test(telefone));
