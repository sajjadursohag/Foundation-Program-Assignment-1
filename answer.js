// Question No. 1
// Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space:

function describeValue(value) {

    const type = typeof value;
    const result = value ? "truthy" : "falsy";

    return `${type} | ${result}`;
}

// console.log(describeValue("0"));
// console.log(describeValue(NaN));
// console.log(describeValue(null));



// Question No. 2

//  Write a function getDayType that takes a day name and returns:

function getDayType(day){
    switch(day.toLowerCase()) {
        case "friday" :
            case "saturday" :
                return "Weekend";

        case "sunday" :
            case "monday" :
                case "tuesday" :
                    case "wednesday" :
                        case "thursday" :
                            return "Working Day";
        default:
            return "Invalid day";
    }
}

// console.log(getDayType("Friday"))
// console.log(getDayType("friday"))
// console.log(getDayType("MONDAY"))
// console.log(getDayType("Bandarban"))


// Question No. 3
// Write a function validateUsername that takes a username and checks it against these rules, in this order:

function validateUsername(username){
    if(username.length <4) {
        return "Too Short";
    } else if(username.includes(" ")) {
        return "No Space Allowed";
    } else if(username.toLowerCase().includes("admin")){
        return "Reseved Word";

    }else {
        return "Available"
    }
}

// console.log(validateUsername("rahim123"));
// console.log(validateUsername("ab"));
// console.log(validateUsername("a b"));
// console.log(validateUsername("abcd"));
// console.log(validateUsername("rahim islam"));
// console.log(validateUsername("superadmin99"));
// console.log(validateUsername("Admin_Rahim"));