let taskInput = document.getElementById("input-area");
let addBtn = document.getElementById("add-task-button");
let todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", function() {
    // This is the "brain" of your button.
    // Anything you type in here will happen ONLY when the button is clicked!
    console.log("Boom! The button was clicked!");
    // 1. Grab the value (text) from the input box
    let userText = taskInput.value;
    
    // 2. Print that specific text to the console
    console.log(userText);
});

