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
		displayCalculadora.textContent += this.value;
	});
}
//Principais operacoes
for(var i = 0;i < btnOperacoes.length;i++){
	btnOperacoes[i].addEventListener("click",function(){
		displayCalculadora.textContent += this.value;
	});
}
btnIgualdade.addEventListener("click",function(){
 	igualdade();
});
btnReseta.addEventListener("click",function(){
	displayCalculadora.textContent = "";
});
//No momento unica maneira que consegui resolver, codigo redundante.
window.addEventListener("keypress",function(e){
	if(e.keyCode === 48){
		displayCalculadora.textContent += "0";
	}else if(e.keyCode === 49){
		displayCalculadora.textContent += "1";
	}else if(e.keyCode === 50){
		displayCalculadora.textContent += "2";
	}else if(e.keyCode === 51){
		displayCalculadora.textContent += "3";
	}else if(e.keyCode === 52){
		displayCalculadora.textContent += "4";
	}else if(e.keyCode === 53){
		displayCalculadora.textContent += "5";
	}else if(e.keyCode === 54){
		displayCalculadora.textContent += "6";
	}else if(e.keyCode === 55){
		displayCalculadora.textContent += "7";
	}else if(e.keyCode === 56){
		displayCalculadora.textContent += "8";
	}else if(e.keyCode === 57){
		displayCalculadora.textContent += "9";
	}else if(e.keyCode === 42){
		displayCalculadora.textContent += " * ";
	}else if(e.keyCode === 43){
		displayCalculadora.textContent += " + ";
	}else if(e.keyCode === 45){
		displayCalculadora.textContent += " - ";
	}else if(e.keyCode === 46){
		displayCalculadora.textContent += ".";
	}else if(e.keyCode === 13){
		igualdade();
	}
});
//Funcoes
function igualdade(){
	displayCalculadora.textContent = eval(displayCalculadora.textContent);
}