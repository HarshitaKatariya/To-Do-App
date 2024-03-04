let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input"); 

btn.addEventListener("click", function(){
    if(inp.value === ""){
        alert("Enter a value");
    }
    else{
        let item = document.createElement("li");
        item.innerText = inp.value;
        ul.appendChild(item);
    
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        item.appendChild(span);
        inp.value = "";
    }

})

ul.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('check');
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

// let det = document.querySelector("span");
// det.addEventListener('click',function(){
//     let par = this.parentElement;
//     console.log(par);
// })