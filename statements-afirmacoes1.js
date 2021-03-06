// Criando uma function toHackerCase que pega uma texto e substitui alguns caracteres por números e sinais de pontuação
// for, if, else, continue, while, switch, break, throw, try catch
// toHackerCase
// Exemplo: oleast -> 013457

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin ac velit vel tristique. Curabitur vel urna vitae nulla pharetra lobortis. Proin lobortis ipsum a dui finibus commodo. Phasellus sollicitudin justo nec enim rhoncus, ac pulvinar metus lobortis. Morbi orci augue, pharetra et facilisis tincidunt, ullamcorper id sapien. Curabitur interdum leo vel arcu auctor iaculis. Nam lorem felis, ultricies eget tempor ac, accumsan nec magna. Phasellus scelerisque rutrum augue, sit amet placerat sapien congue sit amet. Vivamus varius justo tortor, vitae luctus leo volutpat vitae. Aliquam finibus dolor quis lorem luctus sagittis. Nullam in est vestibulum, hendrerit metus quis, ornare ipsum. Curabitur at sem justo."
var toHackerCase = function(text){
	// Se for 0 NaN "" false null undefined não entra no if
	if(!text) throw "Invalid text."
	var hackerTextArray = [];
	// for(var i=0; i<text.length; i++){
	var i = 0;
	while(i < text.length){
		/*if(text.charAt(i) === "o"){
			// Substitui a letra o por 0
			hackerTextArray.push(0);
			continue;
		} 
		else 
		if(text.charAt(i) === "l"){
			// Substitui a letra l por 1
			hackerTextArray.push(1);
			continue;
		}
		else 
		if(text.charAt(i) === "e"){
			// Substitui a letra e por 3
			hackerTextArray.push(3);
			continue;
		}
		else 
		if(text.charAt(i) === "a"){
			// Substitui a letra e por 3
			hackerTextArray.push(4);
			continue;
		}
		else 
		if(text.charAt(i) === "s"){
			// Substitui a letra e por 3
			hackerTextArray.push(5);
			continue;
		}
		else 
		if(text.charAt(i) === "t"){
			// Substitui a letra e por 3
			hackerTextArray.push(7);
			continue;
		}
		else {
			hackerTextArray.push(text.charAt(i));
		}*/
		switch (text.charAt(i)) {
			case "o":
				hackerTextArray.push(0);
				break;
			case "l":
				hackerTextArray.push(1);
				break;
			case "e":
				hackerTextArray.push(3);
				break;
			case "a":
				hackerTextArray.push(4);
				break;
			case "s":
				hackerTextArray.push(5);
				break;
			case "t":
				hackerTextArray.push(7);
				break;
			default:
				hackerTextArray.push(text.charAt(i));
		}
		i++;
	}
	return hackerTextArray.join(""); // Converte o Array em String e se for passado algum parametro sera um separador do texto
};
try {
	console.log(toHackerCase());
} catch (e) {
	console.log("Error: " + e);
}
console.log(toHackerCase(text));
