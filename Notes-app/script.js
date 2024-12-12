const create = document.querySelector("button");
const notesContainer = document.querySelector(".notesContainer");

create.addEventListener("click", ()=>{

    let newInputBox = document.createElement("p");
    let image = document.createElement("img");
    newInputBox.className = "inputBox";

    newInputBox.setAttribute("contenteditable", "true");
    image.src = "images/delete.png";
    image.className = "delete";
    newInputBox.appendChild(image);
    notesContainer.appendChild(newInputBox);
    
    if(create.style.backgroundColor == "red"){
        create.style.backgroundColor = "rgba(214, 149, 205, 0.67)";
    }
    else{
    create.style.backgroundColor = "red";
    }
});

notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
})