let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input"); 

btn.addEventListener("click", function(){
    let task = inp.value.trim(); // Trim the input value to remove leading/trailing whitespace
    
    if(task === ""){
        alert("Enter a value");
    }
    else{
        let item = document.createElement("li");
        item.innerText = task;
        
        let removeButton = document.createElement("button"); // Create a remove button
        removeButton.innerHTML = "\u00d7";
        removeButton.onclick = function() {
            item.remove(); // Remove the parent li when the button is clicked
        };
        item.appendChild(removeButton);
        
        ul.appendChild(item);
        inp.value = "";
    }
});

ul.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('check'); // Changed class name to "checked" for better clarity
    }
});

// Added functionality to handle pressing enter key
inp.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click(); // Simulate a click on the button when Enter key is pressed
    }
});
