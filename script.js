// ==========================================
// STEP 1: GRAB OUR TOOLS FROM THE HTML
// ==========================================
let taskInput = document.getElementById("input-area");
let addBtn = document.getElementById("add-task-button");
let todoList = document.getElementById("todo-list");

// ==========================================
// STEP 2: DEFINE THE ACTIONS (THE FUNCTIONS)
// ==========================================

function addTask() {
    let userText = taskInput.value;

    // The guard checks if it's NOT empty
    if (userText !== "") {
        console.log("User typed:", userText);

        let newLI = document.createElement("li");
        newLI.textContent = userText;
        // 1. Run our factory function, catch the button it shoots out, and save it!
        let deleteBtn = makeDeleteButton();
        // 2. Shove that newly caught button inside our <li> container!
        newLI.appendChild(deleteBtn);
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
        addTask();
    }
} // 👈 This brace completely closes handleKeyDown safely

// ⚠️⚠️⚠️ I havent checked this code below (this named FUNCTION) but according to GEMINI thsi is the NEXT baby step logic
// ⚠️⚠️⚠️ check "step 1" continue reading from there to see what is next or understand wtf is goin on
// Tool D: The Warehouse Guard (Listens for clicks inside the <ul>)
function handleListClick(eventPackage) {
    // 1. Check if the exact HTML element the user clicked has the class "delete-btn"
    if (eventPackage.target.classList.contains("delete-btn")) {
        
        console.log("Delete button caught! Removing task...");
        
        // eventPackage.target is the <button>
        // .parentElement climbs up one level to find the <li> that holds it!
        let listItemToDelete = eventPackage.target.parentElement;
        
        // 2. Completely erase that specific <li> from the webpage!
        listItemToDelete.remove();
    }
}

// Tool C: A dedicated helper whose ONLY job is to build an "X" button
function makeDeleteButton() {
    // 1. Manufacture a physical button element in JavaScript memory
    let btn = document.createElement("button");
    
    // 2. Put the letter X inside it
    btn.textContent = "X";
    
    // 3. Give it a specific class name so we can style it in CSS later
    btn.classList.add("delete-btn");
    
    // 4. Hand the finished button back to whoever called this tool
    return btn; 
}

// ==========================================
// STEP 3: ATTACH THE TRIGGERS
// ==========================================
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", handleKeyDown);
todoList.addEventListener("click", handleListClick);