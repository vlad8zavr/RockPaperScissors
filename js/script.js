let userScore = 0;
let computerScore = 0;

const userScore_span = 
			document.getElementById("user-score");
const computerScore_span = 
			document.getElementById("computer-score");
const scoreBoard_div = 
			document.querySelector(".score-board");
const result_p = 
			document.querySelector(".result > p");

const rock_div = 
			document.getElementById("r");
const paper_div = 
			document.getElementById("p");
const scissors_div = 
			document.getElementById("s");

const smallUser = "[User]".fontsize(3).sub();
const smallComp = "[Steve]".fontsize(3).sub();


// real code starts here

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

function win(user, comp) {
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = `${convertToWord(user)}${smallUser} 
		beats ${convertToWord(comp)}${smallComp}. You win!`;

	user_div = document.getElementById(user);
	user_div.classList.add('green-glow');
	setTimeout(() => user_div.classList.remove('green-glow'), 400);
	
}

function lose(user, comp) {
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(user)}${smallUser} 
		loses to ${convertToWord(comp)}${smallComp}. You lost.`;

	user_div = document.getElementById(user);
	user_div.classList.add('red-glow');
	setTimeout(() => user_div.classList.remove('red-glow'), 400);
}

function draw(user, comp) {
	result_p.innerHTML = `${convertToWord(user)}${smallUser} 
		equals ${convertToWord(comp)}${smallComp}. It's a draw.`;

	user_div = document.getElementById(user);
	user_div.classList.add('gray-glow');
	setTimeout(() => user_div.classList.remove('gray-glow'), 400);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}

}

function main() {
	rock_div.addEventListener('click', () => game("r"));
	paper_div.addEventListener('click', () => game("p"));
	scissors_div.addEventListener('click',() => game("s"));
}

main();