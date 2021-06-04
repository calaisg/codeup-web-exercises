"use strict";

//prompt user for odd numb between 1 & 50
//loop and break to continue prompting if enter invalid input
//use loop and continue to output all numbers between 1 and 50 except one number user entered

var i = 0;
while(i < 1) {
    var skip = prompt("Enter an odd number");
    if (skip % 2 !== 0) {
        break
    }
    else {
        console.log("Please enter an ODD number")
    }
}

console.log("Number to skip is: " + skip);

for(let x = 1; x < 50; x += 2){
    if (x == skip) {
        console.log("Yikes! Skipping number: " + skip);
        continue;
    }
    else{
        console.log("Here is an odd number: " + x);
    }
}


