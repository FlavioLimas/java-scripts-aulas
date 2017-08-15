// Caso haja necessidade de se criar varios objetos distintos Ex: varios pessoas diferentes, é recomendado a utilização da função fabrica

/*var criarHomem = function(nome,idade){
	return{
		nome: nome,
		idade: idade,
		sexo: "masculino"
	};
};

var joao = criarHomem("João",20);
var pedro = criarHomem("Pedro",18);*/

// Criando varios objetos homem a partir de função construtora
var Homem = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
	//this.sexo = "masculino";
};

Homem.prototype.sexo = "masculino";

var joao = new Homem("João",20); // Essa forma de criar o objeto não precisa setar a propriedade prototype explicitamente

console.log(joao);
console.log(joao.sexo);

var _new = function(f){
	var obj = {};
	obj.__proto__= f.prototype;
	f.apply(obj,Array.prototype.slice.call(arguments,1));
};

var pedro = _new(Homem, "Pedro", 18);

/*var pedro = {};
pedro.__proto__ = Homem.prototype;
Homem.call(pedro,"Pedro",18);*/ //Para utilizar o apply é necessário passar o objeto como primeiro parametro e o parametro seguinte seria um array
console.log(pedro);
// console.log(pedro.sexo);
// ALterando a prorpiedada do obejto atrvez do prototype
// Homem.prototype.sexo = "feminino";
// console.log(joao.sexo);
// console.log(pedro.sexo);