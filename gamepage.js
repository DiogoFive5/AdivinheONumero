// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
// contagem de tentativas

playername = localStorage.getItem("player_name")
var guess = 1
// até acerto    
 
function submit(){
    var x = document.getElementById("guessField").value;
if(x == y)
{
    alert("PARABENS!!!!!!!!!!!!!!!!!"+playername+", você acertou em"+guess+" tentativa(s)!");
    guess= 1;
}
else if(x > y){
    guess++;
alert("Resposta errada!!! Tente um número menor");
}
else{
    guess++;
    alert("Resposta errada!!! Tente um número maior")
}
}

// função para o número enviado pelo usuário

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}




