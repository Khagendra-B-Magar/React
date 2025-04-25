let ToDoItems = "";

let inputBox = document.getElementById("input-box");
inputBox.addEventListener("change", setTaskItem);

let task = "";
let taskarray = [];

function setTaskItem(event){
    task = event.target.value;
}

let addButton = document.getElementById("add-button");
addButton.addEventListener("click", saveTask);

function saveTask(e){
    console.log(task);
    if(task == ""){
        alert("enter your task first");
    }else{
        taskarray.push(task);
        localStorage.setItem("tasks", taskarray); 
    }
} 

function getItem(){
    Todoitems = localStorage.getItem("tasks");
    // console.log(items);
}
getItem();

const itemsSpace = document.getElementById("task-item");

// create todo list item

function createItems(){
    //create main element
    let item = document.createElement("div");
    item.classList.add("item");
    // item.innerHTML = "hello this is my new div";

    //create child element

    
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    const itemText = document.createElement("p");
    itemText.innerHTML = Todoitems;


    const crossMark = document.createElement("i");
    crossMark.className = "fa-solid fa-xmark";

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress");


    // append children to item parent
    item.appendChild(checkBox);
    item.appendChild(itemText);
    item.appendChild(progressBar); 
    item.appendChild(crossMark);

    //append children to main parent
    itemsSpace.appendChild(item);
}
createItems();