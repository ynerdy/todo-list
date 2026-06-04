// ==========================================
// STEP 1: GRAB OUR TOOLS FROM THE HTML
// ==========================================
let taskInput = document.getElementById("input-area");
let addBtn = document.getElementById("add-task-button");
let todoList = document.getElementById("todo-list");

// ==========================================
// STEP 2: DEFINE THE ACTIONS (THE FUNCTIONS)
// ==========================================

function handleAddTask() {
    // This MUST stay outside because the 'if' statement needs to read it!
    let userText = taskInput.value;

    // The security guard checks if it's NOT empty
    if (userText !== "") {
        // Everything inside these braces only happens if there is text!
        console.log("Boom! Valid task detected!");
        console.log("User typed:", userText);

        let newLI = document.createElement("li");
        newLI.textContent = userText;
        todoList.appendChild(newLI);

        // Wipes the input box
        taskInput.value = "";
    }
} // 👈 This brace completely closes handleAddTask safely

// Tool B: The Keyboard Inspector
function handleKeyDown(eventPackage) {
    if (eventPackage.key === "Enter") {
        handleAddTask();
    }
} // 👈 This brace completely closes handleKeyDown safely

// ==========================================
// STEP 3: ATTACH THE TRIGGERS
// ==========================================
addBtn.addEventListener("click", handleAddTask);
taskInput.addEventListener("keydown", handleKeyDown);