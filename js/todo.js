const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  console.dir(li.id);
  const removeLiId = parseInt(li.id);
  //console.log(typeof removeLiId);
  toDos = toDos.filter(item => item.id != removeLiId);
  saveToDos();

}
 
function paintToDo(newTodo){
    console.log("i will paint", newTodo);
    const li = document.createElement("li");
    //li.setAttribute("id",newTodo.id); 아래와 동일
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText=" ❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log("하이"+toDoInput.value);
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("this is the turn off", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}



console.log(savedToDos);