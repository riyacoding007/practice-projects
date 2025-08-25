// select elements
const textArea = document.getElementById("add-text");
const addButton = document.getElementById("Add-button");
let ul = document.querySelector("ul"); // Assuming there's only one `<ul>`

// FUNCTION TO CHECK IF the input is EMPTY
function checkIfEmpty() {
    if (textArea.value.trim() === "") {
        alert("You must write something!");
        return true;
    }
    return false;
}
 
// function to add task
function addTask() {
    if (checkIfEmpty()) return; 
    
    // Create a new task item
    let newElement = document.createElement("li");    
    newElement.textContent = textArea.value;

    //create a delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-btn");  // Add CSS
    
    // Add delete button to the task item
    newElement.appendChild(deleteButton);   

    // Append the task item to the list
    ul.appendChild(newElement);

    // Clear input field after adding the task
    textArea.value = "";

    // Event listener to delete task
    deleteButton.addEventListener("click", function() {   
        newElement.remove();  // Removes the specific task
    });

    // Event listener to mark task as completed
    newElement.addEventListener("click", function() {
        newElement.classList.toggle("completed"); // Add CSS 

        // Toggle delete button text
        deleteButton.textContent = deleteButton.textContent === "❌" ? "✅" : "❌";
    });
    // if(deleteButton.textContent === "❌"){
    //     deleteButton.textContent = "Task Completed";
    // }
    // else{
    //     deleteButton.textContent = "❌";
    // }

};

addButton.addEventListener("click", addTask);
