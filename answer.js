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
        return "Reserved Word";

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



// Question No. 4

// Write a function getCngFare(distance, isNight, waitingMinutes) that returns the total fare in taka.


function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if(distance > 2 ) {
        fare = fare + (distance - 2) * 15;
    }

    fare = fare + waitingMinutes * 2;

    if(isNight) {
        fare = fare * 1.2;

    }
    return fare;
}

// console.log(getCngFare(2));



// Question No. 5

// Write an arrow function getChaseVerdict(target, scored, ballsLeft) for a cricket run chase.

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsLeft = target - scored;  

    if(runsLeft <= 0) {
        return "Won";

    } else if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRunRate = (runsLeft / ballsLeft) * 6;

    let verdict;

    if(requiredRunRate <= 6) {
        verdict = "Comfortable";

    } else if(requiredRunRate <= 12) {
        verdict = "Tough";

    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsLeft} runs in ${ballsLeft} balls | ${verdict}`;
}

// console.log(getChaseVerdict(200, 200, 12));
// console.log(getChaseVerdict(200, 190, 0));
// console.log(getChaseVerdict(200, 190, 12));
// console.log(getChaseVerdict(100, 80, 12));
// console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));
