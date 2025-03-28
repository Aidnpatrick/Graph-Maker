let nameKey = [];
let numberValue = [];
let index = 0; // Initialize index to 0

document.getElementById("addObjectButton").addEventListener("click", () => {
    const statsParentDiv = document.getElementById("statsParentDiv");
    const inputField = document.getElementById("inputStats");
    const input = inputField.value.trim();

    if (!statsParentDiv || !inputField) {
        console.error("Required elements not found");
        return;
    }

    if (input === "") {
        console.warn("Input cannot be empty.");
        return;
    }

    const statsChildDiv = document.createElement("div");
    statsChildDiv.className = "child-bar-stats";

    const statsChildDivText = document.createElement("p");
    statsChildDivText.textContent = input;
    
    const statsChildDivInput = document.createElement("input");
    statsChildDivInput.id = `input-${index}`; // Unique ID for input  
    statsChildDivInput.placeholder = "Enter Value";
    statsChildDivInput.classList.add("stats-input"); // Class for event delegation

    nameKey.push(input);
    numberValue.push(0);

    statsChildDiv.appendChild(statsChildDivText);
    statsChildDiv.appendChild(statsChildDivInput);
    statsParentDiv.appendChild(statsChildDiv);

    console.log("Added:", input);

    inputField.value = "";
    index++; // Increment index after adding  
});

// Use event delegation to handle dynamically created input fields  
document.getElementById("statsParentDiv").addEventListener("change", function(event) {
    if (event.target.tagName === "INPUT") {
        console.log("Final value after focus loss:", event.target.value);
        if (event.target.classList.contains("stats-input")) {
            const parentDiv = event.target.parentElement;
            const label = parentDiv.querySelector("p").textContent; // Get associated label  
            console.log(`Input changed for "${label}":`, event.target.value);
            updateBars();
        }
    }
});

function updateBars() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous bars  
    let position = 0;
    for (let i = 0; i < nameKey.length; i++) {
        const sectionBar = document.createElement("div");
        sectionBar.className = "section-bar";
        sectionBar.style.left = position + "px";
        sectionBar.style.width = "50px"; // Set a width for visualization  
        sectionBar.style.height = "20px"; // Set a height for visualization  
        sectionBar.style.backgroundColor = "blue"; // Set a color for visualization 
         
        content.appendChild(sectionBar);
        position += 100; // Adjust spacing between bars  
    }
}