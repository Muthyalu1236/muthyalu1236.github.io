document.addEventListener('keypress',e=>{
if(e.key==='Enter'){
    ans()
}
});

function clearInput(){
calculation.innerText='';
answer.innerText='';
numberArray.splice(0,numberArray.length+1);
}

function ans(){ 
answer.innerText=eval(calculation.innerText);
console.log(eval(numberArray.join('')));
}

const calculation = document.querySelector('.calculation-input')

const numbers=document.querySelectorAll('.numbers');

const operators=document.querySelectorAll('.operator')

const answer = document.querySelector('.answer');


let numberArray=[];

operators.forEach(item =>{
item.addEventListener('click',arrow => {
    numberArray.push(item.innerText)
    console.log(numberArray)
    calculation.append(item.innerHTML)
})
})

numbers.forEach(item => {
item.addEventListener('click',arrow => {
    numberArray.push(item.innerText)
    console.log(numberArray)
    calculation.append(item.innerText)
})
})
