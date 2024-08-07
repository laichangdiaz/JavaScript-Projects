const inputBox = document.getElementById("Input-box");
const listContainer = document.getElementById("list-container");

//function add task
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); //call to save data
}
//cuadno se le da click al task
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); //call to save data
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); //call to save data
    }

}, false);

//guardar a pesar de hacer f5
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();