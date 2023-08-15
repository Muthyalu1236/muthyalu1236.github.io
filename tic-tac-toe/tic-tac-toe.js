const moves =[[],[],[]];
let i=0;
const playerAvatar =[];
let playerOne , playerTwo;

const playerChoice = document.querySelectorAll('.player');

document.querySelectorAll('.avatar').forEach((char)=>{
		char.addEventListener('click',()=>{
				if(i<2){
						const avatar = char.innerText
						playerChoice[i].innerText = avatar;
						playerAvatar.push(avatar)
						char.remove();
						i++;
				}
				if(i==2){
						document.querySelector('.instruction').style.display = 'none';
						document.querySelector('.sidebar').style.display = 'none';
						document.querySelector('.next').style.display = 'block';
				}
		})
})

function nextClick(){
		[playerOne,playerTwo] = playerAvatar;
		console.log(playerOne,playerTwo);
		document.querySelector('.next').style.display = 'none';
		document.querySelector('.game-container').style.display = 'block';
		playerMove = playerOne;
}

document.querySelectorAll('.smallcontainer').forEach((box) => {
		box.addEventListener('click',() =>{
				box.innerHTML = playerMove;
				if(playerMove === playerOne){
								box.style.backgroundColor = 'red';
				} else{
								box.style.backgroundColor = 'yellow';
				}
				const [a,b] = JSON.parse(box.dataset.position);
				moves[a][b] = playerMove;
				box.classList.add('nopointer');

				if(
				moves[0][0] === playerMove && moves[0][1] === playerMove && moves[0][2] === playerMove || 
				moves[1][0] === playerMove && moves[1][1] === playerMove && moves[1][2] === playerMove ||
				moves[2][0] === playerMove && moves[2][1] === playerMove && moves[2][2] === playerMove ||
				moves[0][0] === playerMove && moves[1][0] === playerMove && moves[2][0] === playerMove ||
				moves[0][1] === playerMove && moves[1][1] === playerMove && moves[2][1] === playerMove ||
				moves[0][2] === playerMove && moves[1][2] === playerMove && moves[2][2] === playerMove ||
				moves[0][0] === playerMove && moves[1][1] === playerMove && moves[2][2] === playerMove ||
				moves[0][2] === playerMove && moves[1][1] === playerMove && moves[2][0] === playerMove
				){
								alert(`${playerMove} won the game.`)
								document.querySelector('.container').classList.add('nopointer')
				}

				if(playerMove === playerOne){
								playerMove = playerTwo;
				} else{
								playerMove = playerOne;
				}
		})
})

function reset(){
		document.querySelector('.container').classList.remove('nopointer');

		document.querySelectorAll('.smallcontainer').forEach((box) => {
						box.innerText = '';
						box.style.backgroundColor = 'cyan';
						box.classList.remove('nopointer');
		})

		playerMove = playerOne;

		moves.splice(0,3,[],[],[]);
}