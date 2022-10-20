let names = ["Blair", "Shanon", "Zipporah", "David", "Brian"];

// FOR EACH LOOP
// used when you want to execute the same code for very element of the array
// break; and continue; cannot be used in a for each function, if you try you get an error
// names.forEach(function(name){

// if (name === "Zipporah") {
//     console.log(name + " is my name.");
//     return;
//     // the return; key word just skips to the next iteration, works like continue;
// }
// console.log(name);
// })


// FOR OF LOOP
// for of loop with continue;
// for(let name of names){

//     if (name === "Zipporah") {
//         console.log(name + " is my name.");
//         continue;
//     }
//     console.log(name);
// }

// for of loop with break;
// for(let name of names){

//     if (name === "Zipporah") {
//         console.log(name + " is my name.");
//         break;
//     }
//     console.log(name);
// }


// DO WHILE LOOP
// let n = 0;
// do {
//     console.log(names[n]);
//     n++;
//     if (names[n] === "Zipporah") {
//         console.log(names[n] + " is my name.");
//         break;
//         // continue;
//         // continue; doesn't seem to work cz "Zipporah" is printed!
//     }
    
// } while (n < names.length);