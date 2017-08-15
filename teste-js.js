var pessoa = {
	nome:"Flavio",
	idade: 31,
	telefone: "9999-9999",
	if: 10,
	endereco:{
		logradouro:"Av. Brasil",
		numero: 70,	
		bairro:"Centro"}
};
pessoa["cor dos olhos"] = "azul";
// pessoa["if"] = 10; //Palavras reservadas podem ser utilizadas como propriedade de um objeto porem versões antigas de navegadores não tem suporte para sintaxe 'pessoa.if = 10'
// pessoa.endereco.rua = "Delfina";
// console.log(pessoa);
//delete pessoa["cor dos olhos"]; // Deleta elemento do objeto
//console.log(pessoa);
///////////////////////////////////////////////
function percorerPessoa() {
	for(var propriedade in pessoa) {
	console.log(propriedade + " " + pessoa[propriedade]);	
	}
console.log("--------------------------------------");
}
percorerPessoa();
pessoa.idade = undefined;
percorerPessoa();
delete pessoa.idade;
percorerPessoa();

console.log("Tema Functions");

function soma(a, b){
	return a + b;
}

console.log(soma);
console.log("Resultado " + soma(3,2));
