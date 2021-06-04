"use strict"

//exercise 2 (while loop)
console.log("While Loop Exercise");
var input = 2;
while (input < 65537)
{
    console.log(input);
    input = input * 2;
}

//exercise 3 (do while loop)
//she needs to sell all her cones
//generate random number between 50 and 100 to determine # need to sell //DONE
//inside loop, generate random number between 1 and 5 to determine cones bought
//use do while to log console amount of cones sold to each person
console.log("");
console.log("Do While Loop Exercise");

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var sold = Math.floor(Math.random() * 5) + 1;
    if(allCones >= sold) {
        if(sold == 1) {console.log(sold + " cone sold...");}
        else {console.log(sold + " cones sold...");}
        allCones = allCones - sold;
    }
    else {
        console.log("Cannot sell you " + sold + " I only have " + allCones + "...")
    }
} while (allCones > 0)

console.log("Yay! I sold them all!");



