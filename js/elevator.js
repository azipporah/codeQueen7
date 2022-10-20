// // implementing which elevator level to go on using if elseif
// let level = "Mid-level";

// if (level == "Level 3") {
//     console.log("Elevator is on level 3 coming down for you.");
// } else
//     if (level == "Level 2") {
//         console.log("Elevator is on level 2 coming down for you.");
//     }
//     else if (level == "Level 1") {
//         console.log("Elevator is on level 1 opening soon for you.");
//     } else {
//         console.log("Elevator is stuck, call for help!!");
//     }


// // implementing which elevator level to go on using switch statement
// switch (level) {
//     case "Level 3":
//         console.log("Elevator is on level 3 coming down for you.");
//         break;
//     case "Level 2":
//         console.log("Elevator is on level 2 coming down for you.");
//         break;
//     case "Level 1":
//         console.log("Elevator is on level 1 opening soon for you.");
//     default:
//         console.log("Elevator is stuck, call for help!!");
//         break;
// }

// implementing a for loop using the switch
// for( let lvl = 0; lvl <= 3; lvl++){
    
//     // using the continue key word
//     // continue; allows you to skip executing certain code for a specific condition
//     if (lvl === 1) {
//         continue;
//     }
//     console.log(lvl)
//     // using the break key word
//     // break; allows you to break out of any loop at anytime
//     if (lvl === 2) {
//         console.log("On level 2 now and are getting of the elevator!!");
//         break;
//     }
// }

// // arrays of numbers
// let number = [1,3,7];
// console.log(number);
// // changing value
// number[1] = 5;
// console.log(number);
    
// // array of names
// let manya = ["mee","moo","muu"];
// console.log(manya);

// // changing value
// manya[1] = "mii";
// console.log(manya);

// for in loop
// it uses the indexes of the array values, good when you want to reference a single element in an array
// var cars = ["toyota", "jeep","lambo","van"];
// for (let i in cars) {
//     console.log(cars[i]);
// }

// assignment research
// for of loop
// it uses the array values directly, good for when you want to print out array contents all at once
let nums = [2,4,6,8,10,12,14,16,18,20];
// for(let n of nums){
//     console.log(n);
// }

// while loop
let i = 0;
while (i < nums.length) {
    console.log(nums[i]);
    i++;
    if (nums[i] === 12) {
        console.log("12th index");
        continue;
        // break;
    }

}

// do while loop
// let i = 0;
// do{
//     console.log(nums[i]);
//     i++;
// }while(i < nums.length);

// iterating through an array using for loop
let names = ["Blair", "Shanon", "Zipporah", "David", "Brian"];
// for(let n = 0; n < names.length; n++){
//     console.log(names[n]);
// }