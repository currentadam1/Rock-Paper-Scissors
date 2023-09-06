const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');


const scoreBoard = {
    player: 0,
    computer: 0,
}
// play game
const play = (e) => {
    const playChoice = e.target.id;
    restart.style.display = 'inline-block';
    const computerChoice = getComputerChoice();
    const winner = getWinner(playChoice, computerChoice);
    console.log(playChoice, computerChoice, winner);
    showWinner(winner, computerChoice)


}

// computer choices 
const getComputerChoice = () => {
    const random = Math.random();
    if(random <= 0.34) {
        return 'rock';
    }
    else if(random <= 0.67) {
        return 'paper'
    }
    else {
        return'scissors';
    }
    
}
// get Game Winner
const getWinner = (player, computer) => { 
   if(player === computer) {
        return 'draw';
   } else if(player === 'rock'){
        if (computer === 'paper'){
            return 'computer';
   }else {
    return 'player';
   }
    
    }else if(player === 'paper'){
        if (computer ==='scissors'){
            return 'computer';
        }else {
            return 'player';
        }
    }else if(player === 'scissors'){
        if (computer === 'rock'){
            return 'computer';
        }else {
            return 'player';
        }
    }


}
// show Winner
function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        //show us player result score
        scoreBoard.player ++;
        //show modal result score
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
            `
    } else if (winner === 'computer') {
        //increase player score

        scoreBoard.player++;
        //show modal result
        result.innerHTML =`
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>`
    }else {
        result.innerHTML =`
        <h1>Draw</h1>
        <i class="fas fa-hand${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>`
    }
    
    // show score
    score.innerHTML = `
    <p>player: ${scoreBoard.player}</p>
    <p>computer: ${scoreBoard.computer}</p>`

    modal.style.display = 'block';
}

// restart function
const restartGame = () => {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML =`
    <p>player: 0</p>
    <p>computer: 0</p>`
}

// clear modal function
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
// Event Listner
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
