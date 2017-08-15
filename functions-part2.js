/*var counter = 0;
var add = function () {
	return ++counter;
};
console.log(add());
console.log(add());
console.log(add());
console.log(add());

var itens = [];
var add = function (item) {
	itens.push(item);
	return itens;
};
console.log(add('A'));
console.log(add('B'));
console.log(add('C'));*/
console.log("---------------------------------------------------------");
// Forma de objeto:

var counter = {
	value: 0,
	add: function () {
		return ++this.value;
	}
};
 console.log(counter.add());
 console.log(counter.add());
 console.log(counter.add());

 var itens = {
 	value: [],
 	add: function(item){
 		this.value.push(item);
 		return this.value;
 	}
 };
 console.log(itens.add('A'));
 console.log(itens.add('B'));
 console.log(itens.add('C'));

console.log(counter.add());

// Forma de função que seria mais apropriada: 

/*var createCounter = function(){
	var value = 0;
	
	return {
		add: function(){
			return ++value;
		}
	};
};*/

// Module Pattern

/*var counter = (function(){
	var value = 0;
	
	return {
		add: function(){
			return ++value;
		},
		reset: function(){
			value = 0;
		}
	};
})(); // Module Pattern, em frameworks como jquery e outros esse ideia fica implicita. Isso possibilita a chamada automatica da function
*/

// REVEALING MODULE PATTERN MELHOR LEGIBILIDADE MELHOR FORMA DE IMPLEMENTAÇÃO

var counter = (function(){
	var value = 0;
	var add = function(){
		return ++value;
	};
	var reset = function(){ 
		value = 0;
	};
	return { // Configuração de visibilidade
		add: add,
		reset: reset,
		// value: value
	};
})(); // Module Pattern, em frameworks como jquery e outros esse ideia fica implicita. Isso possibilita a chamada automatica da function


// var counter = createCounter(); Chamada da função
console.log(counter.value); // Não acessa e retorna undefined devido a propriedade value não possuir comportamento
console.log(counter.add()); // return valido pois existe uma referencia que possibilita o acesso a propriedade add
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());

