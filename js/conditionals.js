"use strict";

/* ########################################################################## */

/**
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color)
{
    color = color.toLowerCase();
    if (color == "blue")
    {
        return "Blue is the color of the sea";
    }
    else if (color == "red")
    {
        return "Red is the color of a stop sign";
    }
    else if (color == "green")
    {
        return "Green is the color of well-watered grass";
    }
    else if (color == "yellow")
    {
        return "Yellow is the color of a sunflower";
    }
    else
    {
        return "I do not know anything about " + color;
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * Refactor your above function to use a switch-case statement
 */

switch(randomColor.toLowerCase())
{
    case "blue" :
        alert("Blue is the color of the sea");
        break;
    case "red" :
        alert("Red is the color of a stop sign");
        break;
    case "green" :
        alert("Green is the color of well-watered grass");
        break;
    case "yellow" :
        alert("Yellow is the color of a sunflower");
        break;
    default:
        alert("I do not know anything about " + randomColor);
        break;
}

/**
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var color_name = prompt("Give me a color!");
alert(analyzeColor(color_name));

/* ########################################################################## */

/**
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal (lucky_number, total_amount)
{
    switch(lucky_number)
    {
        case 0 :
            alert("You did not receive a discount, your price is still: " + total_amount);
            break;
        case 1 :
            alert("Your discounted price is: " + (total_amount * .9));
            break;
        case 2 :
            alert("Your discounted price is: " + (total_amount * .75));
            break;
        case 3 :
            alert("Your discounted price is: " + (total_amount * .65));
            break;
        case 4 :
            alert("Your discounted price is: " + (total_amount * .5));
            break;
        case 5 :
            alert("Your items are free! Your discounted price is $0.00! Congrats!");
    }
}

/**
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var total_bill = prompt("What is your total bill?");

alert("Your lucky number was: " + luckyNumber);
alert("Your price before the discount is: " + total_bill)
calculateTotal(luckyNumber, total_bill);

/**
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var confirmed = confirm("Do you want to enter a number?")
if (confirmed == true)
{
    var number_entered = prompt("Enter a number:");
    if(number_entered % 2 == 0)
    {
        alert(number_entered + " is even");
    }
    else
    {
        alert(number_entered + " is odd");
    }
    alert("The number plus 100 is: " + (Number(number_entered) + 100));
    if(number_entered < 0)
    {
        alert(number_entered + " is negative");
    }
    else if (number_entered > 0)
    {
        alert(number_entered + " is positive");
    }
    else if (number_entered == 0)
    {
        alert(number_entered + " is neither positive or negative");
    }
}
else
{
    alert("OK, have a good day!");
}