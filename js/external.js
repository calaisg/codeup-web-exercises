"use strict";

//... rest of javascript code

console.log("Hello from external Javascript");

alert("Welcome to my Website!");

var usercolor = prompt("What is your favorite color?")
alert("Wow, " + usercolor + " is my favorite color too!")

//You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

var mermaid = 3;
var bear = 3;
var hercules = 3;
var total = (3 * mermaid) + (5 * bear) + hercules;
alert("You will have to pay $" + total);

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var google = 400;
var amazon = 380;
var facebook = 350;
var payment = (10 * facebook) + (6 * google) + (4 * amazon);
alert("You will receive $"+ payment);

//A student can be enrolled in a class only if the class is not full and the
// class schedule does not conflict with her current schedule.

var classfull = confirm("Is the class full? (No is OK, Yes is Cancel)");
var conflict = confirm("Is there a conflict? (No is OK, Yes is Cancel)");

if (classfull == true && conflict == true)
{
    alert("Student can enroll in the class");
}
else
{
    alert("Student cannot enroll in the class");
}

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

var expired = confirm("Is the offer expired? (Yes is OK, No is Cancel)");
if (expired == true)
{
    alert("Offer is expired and cannot be applied.");
}
else
{
    var premium = confirm("Are they a premium member? (Yes is OK, No is Cancel)");
    if (premium == true)
    {
        alert("Offer can be applied");
    }
    else
    {
        var items = confirm("Are they buying more than two items? (Yes is OK, No is Cancel)")
        if (items == true)
        {
            alert("Offer can be applied");
        }
        else
        {
            alert("Two or more items need to be purchased, offer cannot be applied.");
        }

    }
}

//Create a variable that holds a boolean value for each of the following conditions:
//
// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

var username = "codeup";
var password = "notastrongpassword";

var min_char = password.length >=5;
var contains = !(password.includes(username));
var max_char = username.length <= 20;
var whitespace = (password === password.trim()) && (username === username.trim());

if(min_char == false)
{
    alert("Password must be at least 5 characters");
}

if(contains == false)
{
    alert("Password cannot contain username");
}

if(max_char == false)
{
    alert("Username cannot be longer than 20 characters");
}

if(whitespace == false)
{
    alert("Username and Password cannot start or end with whitespace");
}

if (min_car == true && contains == true && max_char == true && whitespace == true)
{
    alert("Great, you're signed up!");
}





