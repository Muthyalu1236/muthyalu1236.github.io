const task = document.querySelector('.task-input');
const date = document.querySelector('.date-input ');

const todoObjects = localStorage.getItem('todoList');
const todoList =JSON.parse(todoObjects) || [];

const taskDisplay = document.querySelector('.taskDisplay');
let todoHTML='';
taskDisplay.innerHTML=displayTasks();

function storeToLocalStorage(){
	const todoString = JSON.stringify(todoList);
	localStorage.setItem('todoList',todoString);
}

function checkBoxEvent(){
	const checkBox = document.querySelectorAll('.checkBox')
	const todoTask = document.querySelectorAll('.todoTask')

	checkBox.forEach((value,index)=> {
		value.addEventListener('click',() => {
			if(value.checked){
				todoTask[index].classList.add('check');
				todoList[index].check=1;
				storeToLocalStorage();
			} else if(!value.checked){
				todoTask[index].classList.remove('check');
				todoList[index].check=0;
				storeToLocalStorage();
			}
		})
	})
}

checkBoxEvent()


function addTask(){
	if(task.value ==='' || date.value ===''){
			alert('Task and Date cant be empty.')
			return
	}

	todoList.push({name:task.value,dueDate:date.value,check:0});
	console.log(todoList);
	storeToLocalStorage();
	task.value='';
	date.value='';
	taskDisplay.innerHTML = displayTasks();
	checkBoxEvent();
}

function deleteTask(){
	storeToLocalStorage();
	taskDisplay.innerHTML='';
	todoHTML='';
	taskDisplay.innerHTML = displayTasks();
	checkBox = document.querySelectorAll('.checkBox')
	todoTask = document.querySelectorAll('.todoTask')

	checkBoxEvent()
}

function displayTasks(){
	todoHTML='';
	todoList.forEach((value,index) => {
		if(value.check===1){
					
			html = `<p class="todoTask check">${value.name}</p>
							<p class="dueDate">${value.dueDate}</p>
							<input class="checkBox" type="checkbox" checked>
							<button class="deleteTask" onclick="todoList.splice(${index},1),deleteTask()">Delete</button>`;
		} else{

				html = `<p class="todoTask">${value.name}</p>
								<p class="dueDate">${value.dueDate}</p>
								<input class="checkBox" type="checkbox">
								<button class="deleteTask" onclick="todoList.splice(${index},1),deleteTask()">Delete</button>`;
			}
			
		todoHTML += html;
	})
	return todoHTML;
}
            