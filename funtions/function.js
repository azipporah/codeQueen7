// Functions: code you can reuse again and again without rewriting it.
// Syntax
// function function_name(parameters){ --declaring a function
    // 
//     code ie. what you want to do with the parameters...
//      return...; a must have for every function, basicly means what you want your function to return after execution.
// }
// function_name(arguments) calling of the function
// parameters are found in the function declaration while,
// arguments are found in the function call.

// adding our results from the function to an array
let values = [];

// function that adds 2numbers
function add(){
    // console.log(2+3);
    return 3+4;
}
// function call
let result = add();
console.log(result);
// functions are reusable so we call the function ie. add() only when we need to use it somewhere.

// function that uses parameters
function join(a,b){
    // console.log(2+3);
    return a+b;
}
// function call
let value = join(2,6); 
console.log(value);

// adding our results from the function to an array
// push() is a method used for arrays to add an element after the last element in that array
values.push(result);
values.push(value);
console.log(values);

// Classes & Objects
// Class -> template while Object -> specific version of the class.
// Class Shape{     //class name must start with a capital letter
//     constructor(height,width){ //constructor is a fucntion used to create an oject from a class
//         this.height = height;  //the 'this' key word is used to mean that oject you are creating
//         this.width = width;
//     }
// calcArea(){ //this s the method
    // return this.height * this.width;
// }
// }

// creating objects
// let rectangle = new Shape(4,7) //the 'new' key word is used to create a new shape from the class Shape.

// class Person
class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(food){
        console.log(food);
    }
    drink(drink){
        console.log(drink);
    }
}

// object pheel
let pheel = new Person("Pheel", 25, "Male");
console.log(pheel);
pheel.eat("Spaghetti for "+pheel.name);
pheel.drink("Minute maid berries flavour for "+pheel.name)

// object jane
let jane = new Person("Jane", 26, "Female");
console.log(jane);
jane.eat("Fries for "+ jane.name);
jane.drink("Coke for "+jane.name);