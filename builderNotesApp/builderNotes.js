const notesContaienr = document.querySelector(".notes-container");
const createBtn = document.querySelector(".notes-add");
const notes = document.querySelector(".input-box");

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
    }
})