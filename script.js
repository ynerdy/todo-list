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
    let userText = taskInput.value;

    // The guard checks if it's NOT empty
    if (userText !== "") {
        console.log("User typed:", userText);

        let newLI = document.createElement("li");
        newLI.textContent = userText;
        todoList.appendChild(newLI);

        taskInput.value = "";
        
    } else {
        // 🛑 IF USER TYPED NOTHING, DO THIS:
        console.log("Warning: Input is empty!");
        
        // 1. Immediately slap the red error styling class onto the input element
        taskInput.classList.add("error-flash");

        // 2. Wait 3000 milliseconds (3 seconds), then run this inner code to remove it!
        setTimeout(function() {
            // This pulls the class off, triggering the smooth CSS transition "breathing" fade out!
            taskInput.classList.remove("error-flash");
        }, 3000);
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