// Documentação Ecma-script
// www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
console.log(0 == ""); //true
console.log(0 == '0'); //true
console.log(false == undefined); // false
console.log(false == null); // false
console.log(null == undefined); // true
console.log(1 == true); // true
console.log(0 == false); // true
console.log(0 == '\n'); // true
// A comaparação de tipos distintos se dá a partir da conversão de um dos tipos Ex: x == ToNumber(y)

console.log(10 == new Number(10)); // true A comparação de números com objetos se dá a partir da conversão do objeto para um tipo primitivo Ex: x == ToPrimitive(y) que utiliza uma operação de valueOf ou toString para compara-lo.

var nota = new Number(10);
console.log(nota);
console.log(nota.valueOf());
console.log(10 == nota);

var x = {};

console.log(x);

console.log(10 == x); // false sem a function

x.valueOf = function () {
	return 10;
}

console.log(10 == x); // a function acima faz x ter o valueOf com valor de 10 assim tornando o retorno da function = true

// === Muito igual !== muito diferente

console.log(10 === x);

// Comparação de objetos

var x,y = {};

console.log(x == y); // false
console.log(x === y); // false

var z = x;
console.log(x == z); // true

if(10){ // true
	console.log("OK");
}

// São 6 os valores que tem o return false: 
// !! = acesso ao ToBoolean
console.log(!!0); 
console.log(!!NaN);
console.log(!!'');
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
// Os demais valore após o !! são true
// Ex: 

console.log(!!10);
console.log(!!"10");
console.log(!!{});
console.log(!![]);
