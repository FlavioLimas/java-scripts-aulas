// RFC: https://www.ietf.org/rfc/rfc2822.txt
var hoje = new Date();

console.log(hoje.getTime()); // getTime() Apresenta o tempo em milesegundos

var natal = new Date(1419465600000); // Data do natal de 2014
console.log(natal);

console.log(Date.parse("2015/12/25")); // Date.parse() Retorna a data em milesegundo

console.log(new Date(1451008800000)); // new Date(1451008800000) Retorna a no formato configurado no equipemanto
/*Ou
console.log(new Date(1451008800000).toString());
*/
console.log(new Date().toString());

// ISO8601
console.log(new Date("2015-12-25").toString());
console.log(new Date("2015-12-25T10:30:00").toString());
console.log(new Date("2014-12-25T10:30:00Z").toString());
console.log(new Date("2014-12-25T10:00:00-02:00").toString()); // Padrão correto

// Criando uma data e passando como parametro a propria data
console.log("-------------------------------------------------------------------------");
// Nesse formato não se faz necessário a declaração do OFF SET
console.log(new Date(2015,11,25).toString());

console.log(new Date(2014,11,25,10,30,00,-02,00).toString()); // O mês ele sempre inicia em 0 por tanto deve ser passado valor -1 (menos um) para que seja apresentado o valor desejado
/*
Date API 
• getDate – Retorna o dia 
• getDay - Retorna o dia da semana 
• getFullYear – Retorna o ano 
• getHours – Retorna as horas 
• getMilliseconds – Retorna os milisegundos 
• getMinutes – Retorna os minutos 
• getMonth – Retorna o mês 
• getSeconds – Retorna os segundos 
• getTime – Retorna o tempo em milisegundos 
• toString - Retorna a data em String
*/

console.log(natal.getYear()); // Utilizar getFullYear()
console.log(natal.getFullYear())

console.log(natal.getMonth()+1);

console.log(natal.getDay()); // seria o valor referente aos dias da semana, sendo que domingo = 0, segunda = 1 e assim por diante
// Para que seja retornado o dia utilizar a função getDate()
console.log(natal.getDate());

console.log("Data "+ hoje.getDate() + "/" + hoje.getMonth()+1 + "/" + hoje.getFullYear());