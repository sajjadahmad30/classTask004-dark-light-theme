let body = document.querySelector("body")
let button = document.getElementById("btn")

button.addEventListener("click", function(){
    if(button.textContent === "Night"){
        body.style.background='black'
        button.textContent = "Day";
        button.style.background='white'
        button.style.color='black'

    }else{
        body.style.background='white'
        button.textContent = "Night";
        button.style.background='black'
        button.style.color='white'
    }
 
});