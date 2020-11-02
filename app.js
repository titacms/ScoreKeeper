const playerOne = {
    score: 0,
    button: document.getElementById('p1Button'),
    display: document.getElementById("p1Display"),
}

const playerTwo = {
    score: 0,
    button: document.getElementById('p2Button'),
    display: document.getElementById("p2Display"),
}


const resetButton = document.getElementById("reset")
const winningScoreSelect = document.getElementById("playto")
let winningScore = 3;
let isGameOver = false;


playerOne.button.addEventListener('click', () => updateScores(playerOne, playerTwo))
playerTwo.button.addEventListener('click', () => updateScores(playerTwo, playerOne))

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value)
    reset()
})


function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score >= winningScore && (player.score - opponent.score) >= 2){
            isGameOver = true;
            player.display.classList.add("has-text-success")
            opponent.display.classList.add("has-text-danger")
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score;
    }
    
}

function reset () {
    isGameOver = false;
    playerOne.score = 0;
    playerTwo.score = 0;
    playerOne.display.textContent = 0;
    playerTwo.display.textContent = 0;
    playerOne.display.classList.remove("has-text-success", "has-text-danger")
    playerTwo.display.classList.remove("has-text-success", "has-text-danger")
    playerOne.button.disabled = false
    playerTwo.button.disabled = false
}