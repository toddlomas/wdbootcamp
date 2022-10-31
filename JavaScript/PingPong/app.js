const player1 = {
    score:0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const player2 = {
    score:0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}


const resetBtn = document.querySelector("#reset");
const wsSelect = document.querySelector("#playto");
let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent){
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success")
            opponent.display.classList.add("has-text-danger")
            player.button.disabled = true;
            opponent.button.disabled = true;

        }
        player.display.textContent = player.score;
    }    
}

player1.button.addEventListener('click', function() {
    updateScore(player1,player2)
})

player2.button.addEventListener('click', function() {
    updateScore(player2,player1)
})


wsSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})




resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [player1,player2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }

}