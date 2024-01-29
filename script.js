const playerTurn =() => {
    let input = prompt("Escribe piedra, papel o tijera","");
    return input;
}

// Comprobar que playerSelection es válido
const validatePlayerSelection = () => {
    let playerSelection = playerTurn();
    if (playerSelection.toLowerCase().trim() === "piedra"
    || playerSelection.toLowerCase().trim() === "papel"
    || playerSelection.toLowerCase().trim() === "tijera"){
        console.log("input del usuario aceptado")
        return playerSelection.toLowerCase().trim();
    } else {
        console.log("input del usuario no válido")
        playGame();
    }
}

const getComputerChoice = () =>{
    let options = ["piedra", "papel", "tijera"];
    let randomChoice = Math.floor(Math.random() * 3);
    console.log("la computadora eligió " + randomChoice)
    return options[randomChoice];

}

const compareSelections = () =>{
    let playerSelection = validatePlayerSelection();
    console.log(playerSelection)
    let computerChoice = getComputerChoice();
    console.log("La computadora elige "+ computerChoice)

    if (playerSelection === computerChoice){
        console.log("Empate")
        playGame();
    } else if (playerSelection === "papel" && computerChoice === "piedra") {
        console.log("el jugador gana porque eligió " + playerSelection + " y la computadora eligió " + computerChoice)
        
    } else if (playerSelection === "tijera" && computerChoice === "papel") {
        console.log("el jugador gana porque eligió " + playerSelection + " y la computadora eligió " + computerChoice)
        
    } else if (playerSelection === "piedra" && computerChoice === "tijera") {
        console.log("el jugador gana porque eligió " + playerSelection + " y la computadora eligió " + computerChoice)
        
    } else {
        console.log("La computadora gana porque eligió " + computerChoice + " y el jugador eligió " + playerSelection)
        
    }

}

const playGame = () => {
    compareSelections();
}

playGame();
//validatePlayerSelection();
//console.log(playerTurn());