let nameKey = [];
let numberValue = [];
let colors = [];
let index = 0;

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

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
    statsChildDivInput.id = `input-${index}`;
    statsChildDivInput.placeholder = "Enter Value";
    statsChildDivInput.classList.add("stats-input"); 
    statsChildDivInput.dataset.index = index;

    nameKey.push(index);
    numberValue.push(0);
    colors.push(getRandomColor());

    statsChildDiv.appendChild(statsChildDivText);
    statsChildDiv.appendChild(statsChildDivInput);
    statsParentDiv.appendChild(statsChildDiv);

    console.log("Added:", index, ", AKA:", input);

    inputField.value = "";
    index++;
});
 
document.getElementById("deleteButton").addEventListener("click", () => {
    if (nameKey.length > 0) {
        nameKey.pop();
        numberValue.pop();
        colors.pop();

        const statsParentDiv = document.getElementById("statsParentDiv");
        if (statsParentDiv.lastChild) {
            statsParentDiv.removeChild(statsParentDiv.lastChild);
        }

        updateBars();
    }
});


document.getElementById("statsParentDiv").addEventListener("change", function(event) {
    if (event.target.classList.contains("stats-input")) {
        const inputElement = event.target;
        const inputValue = event.target.value;
        const inputIndex = parseInt(inputElement.dataset.index, 10); // Retrieve correct index

        console.log(`Input changed for "${inputElement.previousSibling.textContent}":`, inputValue);
        

        const valueIndex = nameKey.indexOf(inputIndex);
        if (valueIndex !== -1) {
            numberValue[valueIndex] = inputValue;
        }

        updateBars();
    }
});
  

function updateBars() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    for (let i = 0; i < nameKey.length; i++) {
        const sectionBar = document.createElement("div");
        sectionBar.className = "section-bar";
        content.appendChild(sectionBar);
        
        let randomColor = colors[i];
        for (let k = 0; k < numberValue[i]; k++) {
            const barUnit = document.createElement("div");
            barUnit.className = "bar-unit";
            barUnit.style.backgroundColor = randomColor;
            if (k === numberValue[i] - 1) {
                barUnit.style.borderTopLeftRadius = "10px";
                barUnit.style.borderTopRightRadius = "10px";
            }
            if(k === 0) {
                const text = document.createElement("p");
                text.className = "bar-text";
                text.textContent = numberValue[i];
                barUnit.appendChild(text);

            }

            sectionBar.appendChild(barUnit);
        }
    }
}
