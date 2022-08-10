//declaration
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
let moves_span = document.getElementById('noOfMoves');
let resultText_p = document.getElementById('result__text');
let rock_div = document.getElementById('rock');
let paper_div = document.getElementById('paper');
let scissors_div = document.getElementById('scissor');
let playbtn = document.querySelector('.action_text');

let userScore = 0;
let computerScore = 0;
let move=0;
selection();

//selection 
function selection(){
rock_div.onclick = (e) => {
    if (move < 10) {
        let result = startGame('rock');
        resultStyle(result, rock_div);
        move++;
        moves_span.textContent = ` ${move} `
    } else {
        checkResult();
    }
};
paper_div.onclick = (e) => {
    if (move < 10) {
        let result = startGame('rock');
        resultStyle(result, paper_div);
        move++;
        moves_span.textContent = ` ${move} `
    } else {
        checkResult();
    }
};
scissors_div.onclick = (e) => {
    if (move < 10) {
        let result = startGame('rock');
        resultStyle(result, scissors_div);
        move++;
        moves_span.textContent = ` ${move} `
    } else {
        checkResult();
    }
};

}



//checking and displaying result
function startGame(userChoice) {
    let compChoice = computerChoice(); 

    if(userChoice===compChoice) {
        resultText_p.textContent = "It's a draw!!";
        return 'draw';
    } 
    else if((userChoice==='rock' && compChoice==='scissor') || (userChoice==='paper' && compChoice==='rock') || (userChoice==='scissor' && compChoice==='paper')) {
        userScore++;
        userScore_span.textContent = userScore;
        
        resultText_p.textContent = `Computer tried to block your ${userChoice} with ${compChoice}  `;
        return 'win';
        
    }
    else if((userChoice==='rock' && compChoice==='paper') || (userChoice==='paper' && compChoice==='scissor') || (userChoice==='scissor' && compChoice==='rock')) {
        computerScore++;
        computerScore_span.textContent = computerScore;
       
        resultText_p.textContent = `Computer blocked your ${userChoice} with ${compChoice} ` ;
        return 'loss';
        
    }
}


//computerchoice (random function)
function computerChoice() {
    let choice = ['rock', 'paper', 'scissor']
    let computerChoice = Math.floor(Math.random() * 3);
    return choice[computerChoice];
}


//adding class for styling each crct,wrong and draw choices
function resultStyle(result, e) {
    if(result === 'win') {
        e.classList.add('win');
        setTimeout(() => {e.classList.remove('win')}, 1000)
    } else if (result === 'draw') {
        e.classList.add('draw');
        setTimeout(() => {e.classList.remove('draw')}, 1000)
    } else {
        e.classList.add('lost');
        setTimeout(() => {e.classList.remove('lost')}, 1000)
    }
}

//checking final results and adding a play again button
function checkResult(){

    let myScore=userScore_span.innerText;
    let comScore=computerScore_span.innerText;

    if(myScore>comScore){
        resultText_p.innerHTML = `<h2 style="color:#38e038; margin-bottom:-1.3rem;">YOU WIN</h2>`;
    }
    if(myScore<comScore){
        resultText_p.innerHTML = `<h2 style="color:red; margin-bottom:-1.3rem;">YOU LOSE</h2>`;
    }
    if(myScore==comScore){
        resultText_p.innerHTML = `<h2 style="color:yellow; margin-bottom:-1.3rem;">CO-EQUAL</h2>`;

    }

    playbtn.innerHTML=`<button onclick="playAgain()" id="play">Play again</button>`

}

function playAgain(){
    document.querySelector('.action_text').innerHTML=`Make Your Choice Now!`;
    moves_span.textContent="No of Moves";
    userScore_span.textContent="0";
    computerScore_span.textContent="0";
    userScore = 0;
    computerScore = 0;
    move=0;
    resultText_p.textContent="To begin choose one from rock, paper or scissor";
    selection();
}