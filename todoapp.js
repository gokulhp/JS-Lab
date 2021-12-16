//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const todoSearch = document.forms['forms'].querySelector("input");

//Event Listeners


todoButton.addEventListener('click', addtodo);

todoList.addEventListener('click', deleteCheck);

filterOption.addEventListener('click', filterTodo);

todoSearch.addEventListener('keyup', searchTodo);

//Functions


function addtodo(event) { 

	event.preventDefault();

	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	const completedButton = document.createElement("button");
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add('complete-btn');
	todoDiv.appendChild(completedButton);

	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add('trash-btn');
	todoDiv.appendChild(trashButton);

	todoList.appendChild(todoDiv);

	todoInput.value = "";

	
}

function deleteCheck(e) {
	
	const item = e.target;
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		todo.classList.add("fall");
		todo.addEventListener("transitionend", function() {
                   todo.remove();     
		})
		
	}

	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}

function filterTodo(e) {
	
	const todos = todoList.childNodes;
	todos.forEach(function(todo){

		   switch(e.target.value){

		   	  case "all":
		   	       todo.style.display = "flex";
		   	       break;

		   	  case "completed":
		   	       if (todo.classList.contains('completed')) {
		   	       	   
		   	       	   todo.style.display = "flex";	   
		   	       } else {

		   	       	     todo.style.display = "none";
		   	       }
		   	       break;

		   	   case "incomplete": 
		   	        if (!todo.classList.contains('completed')) {
                         
                         todo.style.display = "flex";

		   	        }  else {

		   	        	todo.style.display = "none";
		   	        } 
		   	        break;       
		   }
	})

}

function searchTodo(event) {

	const term = event.target.value.toLowerCase();

	const items = todoList.getElementsByTagName('li');

	Array.from(items).forEach(function(item){
		 const getItem = item.textContent;
		 if (getItem.toLowerCase().indexOf(term)!= -1) {
		 	
		 	item.style.display = "flex";
		 
		 } else {
            
            item.style.display = "none";

		 }

	})
	              
}