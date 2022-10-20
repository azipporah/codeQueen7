// implementing which elevator level to go on using if elseif
let level = "Mid-level";

if (level == "Level 3") {
    console.log("Elevator is on level 3 coming down for you. if else if");
} else
    if (level == "Level 2") {
        console.log("Elevator is on level 2 coming down for you. if else if");
    }
    else if (level == "Level 1") {
        console.log("Elevator is on level 1 opening soon for you. if else if");
    } else {
        console.log("Elevator is stuck, call for help!! if else if");
    }


// implementing which elevator level to go on using switch statement
switch (level) {
    case "Level 3":
        console.log("Elevator is on level 3 coming down for you. switch");
        break;
    case "Level 2":
        console.log("Elevator is on level 2 coming down for you. switch");
        break;
    case "Level 1":
        console.log("Elevator is on level 1 opening soon for you. switch");
    default:
        console.log("Elevator is stuck, call for help!! switch");
        break;
}