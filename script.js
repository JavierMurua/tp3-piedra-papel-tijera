
let playerScore = 0;
let computerScore = 0;

const playerTurn =() => {
    defaultValue = randomDefaultValue();
    let input = prompt("Escribe piedra, papel o tijera",defaultValue);
    return input;
}

// Comprobar que playerSelection es válido
const validatePlayerSelection = () => {
    let playerSelection = playerTurn();
    /*if (playerSelection === null || playerSelection === undefined){
        console.log("Input del usuario nulo")
        playerSelection = "";
        compareSelections();
    }else*/ if (playerSelection.toLowerCase().trim() === "piedra"
    || playerSelection.toLowerCase().trim() === "papel"
    || playerSelection.toLowerCase().trim() === "tijera"){
        //console.log("input del usuario aceptado")
        return playerSelection.toLowerCase().trim();
    } else {
        console.log("input del usuario no válido")
        compareSelections();
    }
}

const getComputerChoice = () =>{
    let options = ["piedra", "papel", "tijera"];
    let randomChoice = Math.floor(Math.random() * 3);
    //console.log("la computadora eligió " + randomChoice)
    return options[randomChoice];

}


const randomDefaultValue = () =>{
    let options = ["piedra", "papel", "tijera"];
    let randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice];

}

const compareSelections = () =>{
    let playerSelection = validatePlayerSelection();
    console.log("El jugador elige " + playerSelection)
    let computerChoice = getComputerChoice();
    console.log("La computadora elige " + computerChoice)

    if (playerSelection === computerChoice){
        console.log("Empate")
        compareSelections();
    } else if (playerSelection === "papel" && computerChoice === "piedra") {
        console.log("El jugador gana porque eligió " + playerSelection + " y la computadora eligió " + computerChoice)
        playerScore++;
    } else if (playerSelection === "tijera" && computerChoice === "papel") {
        console.log("El jugador gana porque eligió " + playerSelection + " y la computadora eligió " + computerChoice)
        playerScore++;
    } else if (playerSelection === "piedra" && computerChoice === "tijera") {
        console.log("El jugador gana porque eligió " + playerSelection + " y la computadora eligió " + computerChoice)
        playerScore++;
    } else {
        console.log("La computadora gana porque eligió " + computerChoice + " y el jugador eligió " + playerSelection)
        computerScore++;
    }

}

const whoWin = () => {
    if (playerScore > computerScore) {
        return alert("El jugador ganó con " + playerScore + " rondas ganadas");
    } else {
        return alert("Ganó la computadora con " + computerScore + " rondas ganadas");
    }
}



const endGame = () => {
    console.log("El juego ha terminado")
    whoWin();
    playerScore = 0;
    computerScore = 0;
    playGame();
}

const roundCounter = () =>{
    for (let i = 5; i > 0; i--){
        compareSelections();
    }
        endGame();
}

const playGame = () => {
    roundCounter();
}

playGame();
