let able = "GOD IS ABLE";
document.getElementById("awesome").innerHTML = able;

// onclick using a function
function displayDate() {
    document.getElementById('time').innerHTML = Date();
}

// adding event listener
var overdiv = document.getElementById('listen');
overdiv.addEventListener("mouseover", function(e) {
    // alert("Cursor is over my div!");
    console.log(this);
});

// adding eventlistener using a function
var mydiv = document.getElementById('mine');
function handleMyDiv(){
    alert('Clicked my div!');
}

mydiv.addEventListener('click',handleMyDiv);

// conditionals
// if syntax
// if (condition) {
    // what to execute if condition is true
// } else {
    // what to execute if condition is not true
// }
let keys = 10;
let name = "zipi";
let cars = "10";

if (cars === keys) {
    console.log("Condition met!");
}else{
    console.log("Condition not met!");
}

// == means "equal to". it only checks for the value
// != means "not equal to"
// === means "strictly equal to". it checks for both the value and data type eg.
// let keys = 10;
// let cars = "10";
// if (cars === keys) {
//     console.log("Condition met!");
// }else{
//     console.log("Condition not met!");
// }
// "Condition met!" would be printed for "==" and "Condition not met!" would be printed for "==="
