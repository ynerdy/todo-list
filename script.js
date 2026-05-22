let taskInput = document.getElementById("input-area");
let addBtn = document.getElementById("add-task-button");
let todoList = document.getElementById("todo-list");

// just so u know there are differences between an "anonymous function" and a "named function"
addBtn.addEventListener("click", function() {
    // This is the "brain" of your button.
    // Anything you type in here will happen ONLY when the button is clicked!
    console.log("Boom! The button was clicked!");
    // 1. Grab the value (text) from the input box
    let userText = taskInput.value;
    // 2. Print that specific text to the console
    console.log(userText);
    // apprantly i need this and go check on GEMINI again bc it basically gave me 
    // a refactored ver of this whole JS in theory easier to read for a beginer like me ig idk
    let newLI = document.createElement("li");
});

