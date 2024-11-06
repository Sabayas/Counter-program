const add = document.getElementById("add");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const NumberDisplay = document.getElementById("NumberDisplay");


let counter = 0;
add.addEventListener("click", function(){
 counter++;
 NumberDisplay.innerHTML = `${counter}`
})
minus.addEventListener("click", function(){
    counter--;
    NumberDisplay.innerHTML = `${counter}`
})
reset.addEventListener("click", function(){
    counter = 0;
    NumberDisplay.innerHTML = ` ${counter}`
})