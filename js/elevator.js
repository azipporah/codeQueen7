// implementing which elevator level to go on using if elseif
let level = "Mid-level";

if (level == "Level 3") {
    console.log("Elevator is on level 3 coming down for you.");
} else
    if (level == "Level 2") {
        console.log("Elevator is on level 2 coming down for you.");
    }
    else if (level == "Level 1") {
        console.log("Elevator is on level 1 opening soon for you.");
    } else {
        console.log("Elevator is stuck, call for help!!");
    }


// implementing which elevator level to go on using switch statement
switch (level) {
    case "Level 3":
        console.log("Elevator is on level 3 coming down for you.");
        break;
    case "Level 2":
        console.log("Elevator is on level 2 coming down for you.");
        break;
    case "Level 1":
        console.log("Elevator is on level 1 opening soon for you.");
    default:
        console.log("Elevator is stuck, call for help!!");
        break;
}