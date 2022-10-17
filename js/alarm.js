// setting a different alarm for a different day of the week using if elseif
let day = "Holiday";

if (day == "Monday") {
    console.log("Alarm:5am!");
} else
    if (day == "Tuesday") {
        console.log("Alarm:4am!");
    } else
        if (day == "Wednesday") {
            console.log("Alarm:3am!");
        } else
            if (day == "Thursday") {
                console.log("Alarm:6am!");
            } else
                if (day == "Friday") {
                    console.log("Alarm:7am!");
                } else
                    if (day == "Saturday") {
                        console.log("Alarm:8am!");
                    } else
                        if (day == "Sunday") {
                            console.log("Alarm:9am!");
                        } else {
                            console.log("Sleep whole day!!");
                        }

// using switch statement
switch (day) {
    case "Sunday":
        console.log("9am!");
        break;
    case "Monday":
        console.log("5am!");
        break;
    case "Tuesday":
        console.log("4am!");
        break;
    case "Wednesday":
        console.log("3am!");
        break;
    case "Thursday":
        console.log("6am!");
        break;
    case "Friday":
        console.log("7am!");
        break;
    case "Saturday":
        console.log("8am!");
        break;

    default:
        console.log("Sleep for whole day!");
        break;
}