//Variaveis
var displayCalculadora = document.querySelector("#displayCalculadora");
var btnNumeros = document.querySelectorAll(".numero");
var btnOperacoes = document.querySelectorAll(".operacao");
var btnIgualdade = document.querySelector("#btnIgualdade");
var btnReseta = document.querySelector("#btnReseta");
//Eventos clique
//Numeros
for(var i = 0;i < btnNumeros.length;i++){
	btnNumeros[i].addEventListener("click",function(){
		displayCalculadora.value += this.value;
	});
}
//Principais operacoes
for(var i = 0;i < btnOperacoes.length;i++){
	btnOperacoes[i].addEventListener("click",function(){
		displayCalculadora.value += this.value;
	});
}
btnIgualdade.addEventListener("click",function(){
 	displayCalculadora.value = eval(displayCalculadora.value);
});
btnReseta.addEventListener("click",function(){
	displayCalculadora.value = "";
})
