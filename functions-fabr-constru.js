// Funções Fábrica vs. Funções Construtoras 

// Funções Fábrica:

var criarPessoa = function (nome,idade) {
	return {
		nome: nome,
		idade: idade
	};
};

console.log(criarPessoa("Pedro",25));
console.log(criarPessoa("Maria",30));

// Funções Construtoras:

var Pessoa = function (nome,idade) {
	this.nome = nome;
	this.idade = idade;
};

console.log(new Pessoa("Pedro",20));
console.log(new Pessoa("Maria",30));

var pedro = {};
Pessoa.call(pedro,"Pedro",15);
console.log(pedro);

// Mantendo a referencia ao objeto externo da função

var helloWord = function () {
	var message = "Hello World!";
	return function () {
		return message;
	};
};

var fnHelloWord = helloWord();
console.log(fnHelloWord());