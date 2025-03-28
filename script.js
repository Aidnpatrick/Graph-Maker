document.getElementById("addObjectButton").addEventListener("click", () => {
    const statsParentDiv = document.getElementById("statsParentDiv");
    const inputField = document.getElementById("inputStats");
    const input = inputField.value.trim(); // Remove whitespace
  
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
  
    statsChildDiv.appendChild(statsChildDivInput);
    statsChildDiv.appendChild(statsChildDivText);
    statsParentDiv.appendChild(statsChildDiv);
    console.log("Added:", input);
  
    inputField.value = ""; // Clear input field after adding
  });
