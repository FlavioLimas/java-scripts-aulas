var homem = {
	sexo:"masculino"
};

var joao = {
	nome: "João",
	idade: 20,
	sexo: "feminino"
//	__proto__: homem // Faz referencia (heranca) para objeto homem, porem não é suportado por todos os navegadores
};

delete joao.sexo;
//Criando objeto com object.create
var pedro = Object.create(homem);
pedro.nome = "Pedro";
pedro.idade = 18;

Object.setPrototypeOf(joao,homem); // Faz referencia (heranca) para objeto homem, seria o formato recomendado, devido a ter uma maior quantidade de navegadores que suportam esse formato

console.log("Joao");
console.log(joao.sexo);
console.log("Pedro");
console.log(pedro.sexo);

console.log(Object.keys(joao)); // Object.keys apresenta a propriedade dos objetos
// imprimindo as propriedades do objeto joa, inclusive do objeto, caso haja um
for(var propriedade in joao){
	//if(!joao.hasOwnProperty(propriedade)) continue; // Essa linha verifica se não há uma propriedade e caso não haja ela segue para proximo e não considera a propriedade herdada
	console.log(propriedade);
}