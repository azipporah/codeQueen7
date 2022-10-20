let names = ["Blair", "Shanon", "Zipporah", "David", "Brian"];
// Kindly uncomment the code below the  UPPERCASED COMMENTS!! to run the respective code.

// FOR EACH LOOP
// used when you want to execute the same code for very element of the array

// names.forEach(function(name){
// if (name === "Zipporah") {
//     console.log(name + " is my name.");
//     return;
//     // the return; key word just skips to the next iteration, works like continue;     
//     // break; and continue; cannot be used in a for each function, if you try you get an error
// }
// console.log(name);
// })


// FOR OF LOOP:continue;

// for(let name of names){
//     if (name === "Zipporah") {
//         console.log(name + " is my name.");
//         continue;
//     }
//     console.log(name);
// }

// FOR OF LOOP:break;

// for(let name of names){
//     if (name === "Zipporah") {
//         console.log(name + " is my name.");
//         break;
//     }
//     console.log(name);
// }


// DO WHILE LOOP: continue;

// let n = 0;
// do {
//     console.log(names[n]);
//     n++;
//     if (names[n] === "Zipporah") {
//         console.log(names[n] + " is my name.");
//         continue;
//         // continue; doesn't seem to work cz "Zipporah" in the array is still printed!
//     }
    
// } while (n < names.length);



// DO WHILE LOOP: break;

// let n = 0;
// do {
//     console.log(names[n]);
//     n++;
//     if (names[n] === "Zipporah") {
//         console.log(names[n] + " is my name.");
//         break;
//     }
    
// } while (n < names.length);