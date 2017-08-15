var carros = [];

carros[0] = {marca:"Ford",modelo:"Ka"};
carros[1] = {marca:"Chevrolet",modelo:"Corsa"};
carros[2] = {marca:"Fiat",modelo:"Palio"};
carros[3] = {marca:"Ford",modelo:"Fusion"};

// Filtrando array sem filter:
var carrosFord = [];
carros.forEach(function(elemento){
	if (elemento.marca === "Ford") {
		carrosFord.push(elemento);
	}
});
console.log(carrosFord);

// Filtrando array com filter:
console.log(
	carros.filter(
		function (elemento) {
			return elemento.marca === "Ford";
		}
	)
);

// pesquisando em todos elementos do array - retorno expressão boll:
console.log("Todos os carros são da marca Ford ? " +
	carros.every(function(elemento){
		return elemento.marca === "Ford";
	})
);

console.log("Existe algum elemento = Ford ? " +
	carros.some(function(elemento){
		return elemento.marca === "Ford";
	})
);

// Mapeando os elementos do array com map
console.log("Todas as marcas do objeto: " +
	carros.map(function(elemento){
		return elemento.marca;
	})
);

console.log("A quantidade de caractere em cada elemento do array " +
	carros.map(function(elemento){
		return elemento.modelo.length;
	})
);

// O array original não foi alterado

// Processando os elementos do array com reduce
var carros = [];
carros[0] = {modelo:"Ka",preco:28800};
carros[1] = {modelo:"Corsa",preco:34750};
carros[2] = {modelo:"Palio",preco:32000};

// Somando o valor total dos elementos 'PRECO' do array

var total = 0;
carros.forEach(function(elemento){
	total += elemento.preco;
});
console.log(total);

// Somando o valor total dos elementos 'PRECO' do array com reduce
console.log(
carros.reduce(function(prev,cur){
	return prev+ cur.preco;
},0));

// Concatenando dois arrays

var carros = ["Ka","Corsa","Palio"];
var motos = ["Honda","Yamaha"];

var veiculos = carros.concat(motos);

console.log(veiculos.toString());

console.log(veiculos);

// Fatiando array com splice

var carros = [];

carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";
carros[3] = "Gol";

console.log(carros.slice(0,2)); // Gera um array com elemento da posição 0 ate a segunda -1 do array OBS: o array original não é alterado
console.log(carros.slice(1,3));
console.log(carros.slice(2));
console.log(carros);

// Invertendo a ordem de um Array com reverse 
// OBS: reverse altera a posição do array original

console.log(carros.reverse());
console.log(carros.toString());

// É possivel inverter novamente aplicando o comando reverse novamente

console.log(carros.reverse());

// Ordenando os elementos de um array com sort
// OBS: sort altera o array original

console.log(carros.sort());
console.log(carros);
// Ordenando pelos preços
var carros = [];
carros[0] = {modelo:"Ka",preco:28800};
carros[1] = {modelo:"Corsa",preco:34750};
carros[2] = {modelo:"Palio",preco:32000};
// Do menor para maior
console.log("Do menor para maior, Crescente:");
console.log(carros.sort(function(a,b){
		return a.preco - b.preco;
	})
);

// Do maior para menor
console.log("Do maior para menor, Decrescente:");
console.log(carros.sort(function(a,b){
	return b.preco - a.preco;
	})
);

// Juntando os elementos de um array com join 
// OBS: gera um novo array

var carros = [];

carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";
carros[3] = "Gol";

//console.log(carros.join("-"));
console.log(carros.join(";").split(";")); // Unificando com join e apos separando com split

//console.log(new Array(10));
//console.log(new Array(10).join("JavaScript"));