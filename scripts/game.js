function avatar() {
    location.href = 'file:///C:/Users/danie/Documents/GAME%20the%20GAME/html/game.html';
}
function dead() {
    location.href = "file:///C:/Users/danie/Documents/GAME%20the%20GAME/html/gameover.html";
    alert("Pessima escolha amigo, o aCid não iria te ajudar!!");
}
function cajado() {
    var escolha = '';
    escolha = prompt("Você escolheu o Cajado em uma boa hora, existe Zumbis se aproximando...  \n   1 Correr \n 2 Vamos lutar");
    while (escolha != '1' && escolha != '2') {
        escolha = prompt("Você escolheu o Cajado em uma boa hora, existe Zumbis se aproximando...  \n   1 Correr \n 2 Vamos lutar");
    }
    if (escolha == '1') {
        alert("Corre, precisamos passar por eles.")
        vitoria();
        location.href = "file:///C:/Users/danie/Documents/GAME%20the%20GAME/html/game2.html";
    } else {
        alert("Lutar não foi uma boa ideia, deveriamos ter corrido")
        location.href = "file:///C:/Users/danie/Documents/GAME%20the%20GAME/html/gameover.html";
    }
}

function arma() {
    var escolha = '';
    escolha = prompt("Você escolheu a arma, mas encontramos o primiro desafio, não podemos fazer barulho tem zumbis vindo em nossa direção... \n  1 Vamos sair escondinho \n 2 Vamos Lutar");
    while (escolha != '1' && escolha != '2') {

        escolha = prompt("Você escolheu a arma, mas encontramos o primiro desafio, não podemos fazer barulho tem zumbis vindo em nossa direção... \n  1 Vamos sair escondinho \n 2 Vamos Lutar");
    }
    if (escolha == '1') {
        alert("Calma Jovem, precisamos passar por eles em silencio");
        vitoria();
    } else {
        alert("Fizemos baraulho demais, esse foi nosso erro!");
        location.href = "file:///C:/Users/danie/Documents/GAME%20the%20GAME/html/gameover.html";
    }
}
function vitoria() {
    var winner = '';
    winner = prompt("Isso! conseguimos passar, agora estamos proximo, existe duas opções, podemos ir pela rua ou pelo subsolo... \n 1 Subsolo \n 2 Rua");
    while (winner != '1' && winner != '2') {
        winner = prompt("Isso! conseguimos passar, agora estamos proximo, existe duas opções, podemos ir pela rua ou pelo subsolo... \n 1 Subsolo \n 2 Rua");
    }
    if (winner == '1') {
        alert('Bom trabalho, passamos  e conseguimos completar a missão');
        location.href = "file:///C:/Users/danie/Documents/GAME%20the%20GAME/html/game2.html"
    } else {
        alert("Dessa vez foi quase! A rua estava cheia de armardilhas e acabamos caindno nelas");
        location.href = "file:///C:/Users/danie/Documents/GAME%20the%20GAME/html/gameover.html";

    }
}
