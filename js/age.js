
// if() else if()
var age = 10;
if(age <= 1){
    console.log("You are an infant!");
} else
if (age > 0 && age <= 12) {
    console.log("You are a child!");
} else 
if (age > 12 && age <= 19){
    console.log("You are a teenager!");
} else
if (age > 19 && age <= 25){
    console.log("You are a young adult!");
} else
if (age > 25 && age <= 35){
    console.log("You are a mature person!");
}
else{
    console.log("Not in desirable age bracket");
}