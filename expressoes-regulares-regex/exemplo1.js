// Duas formas de declaração
var regExp = /abc/;
console.log(regExp);

var regExp = RegExp("abc");
console.log(regExp);

var regExp = /9999-9999/;
var telefone = "9999-9999";
console.log(regExp.exec(telefone)); // Apresenta o resultado encontrado a partir do dado armazenado na variavel telefone
console.log(regExp.test(telefone)); // test tem um retorno boleano referente se existe um padrão ou não, nesse caso é true
