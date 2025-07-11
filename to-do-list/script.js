// // select elements
// const textArea = document.getElementById("add-text");
// const addButton = document.getElementById("Add-button");
// let ul = document.querySelector("ul"); // Assuming there's only one `<ul>`

// // FUNCTION TO CHECK IF the input is EMPTY
// function checkIfEmpty() {
//     if (textArea.value.trim() === "") {
//         alert("You must write something!");
//         return true;
//     }
//     return false;
// }

// // function to add task
// function addTask() {
//     if (checkIfEmpty()) return; 
    
//     // Create a new task item
//     let newElement = document.createElement("li");    
//     newElement.textContent = textArea.value;

//     //create a delete button
//     let deleteButton = document.createElement("button");
//     deleteButton.textContent = "❌";
//     deleteButton.classList.add("delete-btn");  // Add CSS
    
//     // Add delete button to the task item
//     newElement.appendChild(deleteButton);   

//     // Append the task item to the list
//     ul.appendChild(newElement);

//     // Clear input field after adding the task
//     textArea.value = "";

//     // Event listener to delete task
//     deleteButton.addEventListener("click", function() {   
//         newElement.remove();  // Removes the specific task
//     });

//     // Event listener to mark task as completed
//     newElement.addEventListener("click", function() {
//         newElement.classList.toggle("completed"); // Add CSS 

//         // Toggle delete button text
//         deleteButton.textContent = deleteButton.textContent === "❌" ? "✅" : "❌";
//     });
//     // if(deleteButton.textContent === "❌"){
//     //     deleteButton.textContent = "Task Completed";
//     // }
//     // else{
//     //     deleteButton.textContent = "❌";
//     // }

// };

// addButton.addEventListener("click", addTask);









// Select elements
const textArea = document.getElementById("add-text");
const addButton = document.getElementById("Add-button");
let ul = document.querySelector("ul");

// Function to load tasks from local storage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
}

// Function to save tasks in local storage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("ul li").forEach(li => {
        tasks.push({
            text: li.textContent.replace("❌", "").replace("✅", "").trim(),
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to create a new task element
function createTaskElement(taskText, isCompleted = false) {
    let newElement = document.createElement("li");
    newElement.textContent = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = isCompleted ? "✅" : "❌"; 
    deleteButton.classList.add("delete-btn");

    newElement.appendChild(deleteButton);
    ul.appendChild(newElement);

    if (isCompleted) {
        newElement.classList.add("completed");
    }

    // Event listener to mark task as completed
    newElement.addEventListener("click", function() {
        newElement.classList.toggle("completed");
        deleteButton.textContent = newElement.classList.contains("completed") ? "✅" : "❌";
        saveTasks(); // Save updated task state
    });

    // Event listener to delete task
    deleteButton.addEventListener("click", function() {
        newElement.remove();
        saveTasks(); // Save after deletion
    });
}

// Function to add a new task
function addTask() {
    if (textArea.value.trim() === "") {
        alert("You must write something!");
        return;
    }

    createTaskElement(textArea.value);
    textArea.value = "";
    saveTasks(); // Save after adding new task
}

// Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);

// Event listener for Add button
addButton.addEventListener("click", addTask);
