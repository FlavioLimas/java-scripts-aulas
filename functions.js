// Passagem por referencia
var produto = {nome:'Sapato', preco:150};

var formulaImpostoA = function (preco) {
	return preco*0.1;
};
var formulaImpostoB = function (preco) {
	return preco*0.2;
};

var calcularPreco = function(produto,formulaImposto) {
	return produto.preco + formulaImposto(produto.preco);
}

console.log("formulaImpostoA " + calcularPreco(produto,formulaImpostoA));
console.log("formulaImpostoB " + calcularPreco(produto,formulaImpostoB));

// Invocando uma funcao a partir de outra
var helloWord = function() {
	return function () {
		return "Hello Word!";
	};
};

console.log(helloWord);
console.log(helloWord());
console.log(helloWord()());

// Utilizando função como método, declarada dentro de um objeto

// Declaração global de function

var getIdade = function(extra) {
	console.log(arguments);
	return this.idade + extra;
};

// Declarando a partir de um objeto

var pessoa = {
	nome:"João",
	idade:20,
	getIdade: getIdade /*function() {
		return this.idade;
	}*/
};

console.log(getIdade());
console.log(pessoa.getIdade());
/* 
console.log(pessoa);
console.log(pessoa.getIdade);
console.log(pessoa.getIdade());*/

// Invocando a função com call

console.log(pessoa.getIdade(2));
console.log(getIdade());
console.log(getIdade.call(pessoa, 3, 5, 6));
console.log(getIdade.apply(pessoa, [4, 1, 5]));