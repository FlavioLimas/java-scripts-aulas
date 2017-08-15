console.log(carros = ["Ka","Corsa","Palio"]);
var valorDe = carros.valueOf(); // valueOf retorna o array
console.log(valorDe);
console.log(carros.toString()); 
console.log(carros.length);
console.log(carros);
carros.push("Gol"); // push add um elemento na ultima posição
console.log(carros);
console.log(carros.pop()); //pop retira o ultimo elemento da lista
console.log(carros);
console.log(carros.unshift("Gol")); // unshift add um elemento no inicio da lista
console.log(carros.toString());
console.log(carros.shift()); // shift retira o primeiro elemento da lista
console.log(carros);
console.log(carros.indexOf("Corsa")); // indexOf retorna posição que foi informada no Array
console.log(carros.splice(1,1)); // splice nesse formato retira o elemento na posição 1, 1 elemento (posição,qtd a ser removida)
console.log(carros);
console.log(carros.splice(1,1,"Corsa","Sonic","Palio")); // os dois primeiros parametros são referente a retirada de dos elementos (Posição, quantidade, o que vier apos seria referente aos elementos adicionados ao Array)
console.log(carros);
console.log(carros.splice(2,1)); // Retira o elemento da posição 2 do Array
console.log(carros.splice(1,0,"Sonic")) // Add o elemento na posição 1 do Array e não retira ninguém
console.log(carros);
console.log(carros.length);

// forEach

carros.forEach(function(elemento){
	console.log(elemento);
});

