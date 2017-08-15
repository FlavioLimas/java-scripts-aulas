// A função abaixo retorna um número aleatório sendo que o valor passado como argumento será considerado o maior valor do range
var generateSerial = function(max){
	// if (max === undefined || max === null || max === 0) {max = 1000};
	// Ou pode ser utilizado uma expressão ToBollean para o if:
	// if (!max) {max = 1000;}	
	max = max || 1000; // Se max for direfente de 0 ele reatribui ao proprio max
	return Math.floor(Math.random() * max);
};

console.log(generateSerial(1000));
console.log(generateSerial());
// Diferença entre os operadores
console.log(1 || 2);

console.log(1 | 2); // Essa seria uma representação de operação binária em que: 1|2 é 0001 = 1, 0010 = 2, 0011 = 3, Representação binária dos numeros Sendo que 1 OU 0 é 1

console.log(1 && 2);
console.log(1 & 2); // Essa seria uma representação de operação binária em que 1 & 2 é 0 0001 = 1, 0010 = 2, 0000 = 0 Explicação: 1 E 0 é 0

// Retornando o tipo dos dados 
console.log(typeof 10); // number
console.log(typeof "JavaScript"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof /abc/); // object
console.log(typeof []); // object
console.log(typeof new Date()); // object

// Construindo um objeto com funções construtoras
var Pessoa = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
};
var pedro = new Pessoa("Pedro",20);
console.log(pedro);
console.log(pedro instanceof Pessoa);
console.log(pedro instanceof Date);

// in Verifica se uma determinada propriedade faz parte de um objeto

console.log("nome" in pedro); // A propriedade nome faz parte do objeto pedro = true
console.log("peso" in pedro); // false

// delete apaga a propriedade de um determinado objeto
console.log(delete pedro.nome); // Esse comando retorna true
console.log("nome" in pedro);
console.log(pedro);

// Operador ternario (expressão) ? true : false
var idade = 22;
console.log((idade >= 18) ? "Maior de idade" : "Menor de idade");
