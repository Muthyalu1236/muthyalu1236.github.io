let computerMove;
let result;
const moveArray=['Rock','Paper','Scissors'];
const emojiArray=['✊','🖐️','✌️'];

const score=JSON.parse(localStorage.getItem('score')) || {wins:0,loses:0,ties:0};

function updateResultElement(result_text){
		document.querySelector('.js-result').innerText=result_text;
}

function updateMovesElement(playerMove,computerMove){
		document.querySelector('.js-moves').innerHTML=`You chose: <emoji class="emoji">${emojiArray[moveArray.indexOf(playerMove)]}</emoji> --- Computer chose: <emoji class="emoji">${emojiArray[moveArray.indexOf(computerMove)]}</emoji>`;
}

function updateScoreElement(){
		document.querySelector('.js-score').innerHTML= `Wins: ${score.wins}, Losess: ${score.loses} , Ties: ${score.ties}`;
}

updateScoreElement();

function pickComputerMove(){
	randomNumber=Math.random()
	
	if(randomNumber>=0 && randomNumber<1/3){
			return 'Rock';
	}else if(randomNumber>=1/3 && randomNumber<2/3){
			return 'Paper';
	}else if(randomNumber>=2/3 && randomNumber<1){
			return 'Scissors';
	}
}

function finalResult(playerMove,comMove){
	if(playerMove===comMove){
			return 'Tie';
	} else if((playerMove==='Rock' && comMove==='Paper') || (playerMove==='Paper' && comMove==='Scissors') || (playerMove==='Scissors' && comMove==='Rock')){
			return 'You Lose'
	} else if((playerMove==='Rock' && comMove==='Scissors') || (playerMove==='Paper' && comMove==='Rock') || (playerMove==='Scissors' && comMove==='Paper')){
			return 'You Win'
	}

}

function playGame(playerMove){
	computerMove=pickComputerMove();
		result=finalResult(playerMove,computerMove);
	if(result==='You Win'){
		score.wins+=1;
	} else if(result==='You Lose'){
		score.loses+=1;
	} else if(result==='Tie'){
		score.ties+=1;
	}

	localStorage.setItem('score',JSON.stringify(score));

		updateMovesElement(playerMove,computerMove);

		updateResultElement(result);

		updateScoreElement();
}