const notesContaienr = document.querySelector(".notes-container");
const createBtn = document.querySelector(".notes-add");
const notes = document.querySelector(".input-box");

function showNotes(){
    notesContaienr.innerHTML =localStorage.getItem("notes");
}
showNotes();

//guarda info en el navegador
function updateStorage(){
    localStorage.setItem("notes", notesContaienr.innerHTML);
}
createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className ="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src ="../style/general-icons/delete.png";
    notesContaienr.appendChild(inputBox).appendChild(img);
})

//eliminar nota
notesContaienr.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName === "P"){
        notes =document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
