// Exercise:
// 1. Create a variable to hold the value of the day of the week.
const weekDay = 6
// 2. Write a switch statement that will check the value of the variable. The switch statement will console log the following for each day of the week:
const statement = (weekday) => {
    switch (weekday) {
        case 1:
            console.log("happy monday")
            break
        case 2:
            console.log("It's Tuesday. You got this!")
            break
        case 3:
            console.log("Hump day already!")
            break
        case 4:
            console.log("Just one more day 'til the weekend!")
            break
        case 5:
            console.log("Happy Friday!")
            break
        case 6:
            console.log("Have a wonderful Saturday!")
            break
        case 7:
            console.log("It's Sunday, time to relax!")
            break
        default:
            console.log("please specify the date")
            break

    }
}
// Monday: "Happy Monday!"
// Tuesday:
// Wednesday:
// Thursday:
// Friday:
// Saturday:
// Sunday:

// Challenge:
// Add a default case to the switch statement that console logs "Please specify a day of the week." Change the value of your variable to see your default case being executed.

// Advanced Challenge:
// Change the switch statement so that for all weekdays, it console logs "Weekday" and for Saturday and Sunday, it console.logs "Weekend"