// select elements
const textArea = document.getElementById("add-text");
const addButton = document.getElementById("add-Button");
let ul = document.querySelector("ul"); // Assuming there's only one `<ul>`

// FUNCTION TO CHECK IF the input is EMPTY
function checkIfEmpty() {
    if (textArea.value.trim() === "") {
        alert("You must write something!");
        return true;
    }
    return false;
}
 
function createNewTaskItem(taskText) {
    const newElement = document.createElement("li");  // new list ( <li> ) created
    newElement.textContent = taskText;

    return newElement
}
// function to add task
function addTask() {
    if (checkIfEmpty()) return; 

    const newElement = createNewTaskItem(textArea.value);
    ul.appendChild(newElement);

    textArea.value = "";
}

// Add event listener to the add button
addButton.addEventListener("click", addTask);



