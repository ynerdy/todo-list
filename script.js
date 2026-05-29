// ==========================================
// STEP 1: GRAB OUR TOOLS FROM THE HTML
// ==========================================
// We search the HTML page by ID so JavaScript can interact with them.
let taskInput = document.getElementById("input-area");
let addBtn = document.getElementById("add-task-button");
let todoList = document.getElementById("todo-list");


// ==========================================
// STEP 2: DEFINE THE "ACTION" (THE FUNCTION)
// ==========================================
// This is a NAMED function. It sits here like a tool in a toolbox, 
// waiting to be used. It will NOT run until someone explicitly triggers it.
function handleAddTask() {
    console.log("Boom! The button was clicked!");

    // 1. Grab the literal text typed inside the input box and save it
    let userText = taskInput.value;
    console.log("User typed:", userText);

    // 2. Create a brand new, empty <li> element entirely in JS memory
    let newLI = document.createElement("li");

    // 3. Put the user's text inside our new blank <li> element
    newLI.textContent = userText;
    
    // 4. (Next step) We will actually append this to our todoList here!
}


// ==========================================
// STEP 3: ATTACH THE TRIGGER (THE EVENT LISTENER)
// ==========================================
// We tell our button variable to listen for a "click". 
// When that click happens, it goes and runs our "handleAddTask" tool above.
addBtn.addEventListener("click", handleAddTask);