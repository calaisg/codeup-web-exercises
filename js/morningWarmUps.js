//7/1

// DONE: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countSpaces(string){
    if (typeof string != "string"){
        return false;
    }

    var spaces = 0;
    for (let i = 0; i < string.length; i++){
        if (string.charAt(i) === " "){
            spaces++
        }
    }
    return spaces;
}

// DONE: Add validation to function above, if the argument pass is not a string it should return false.
    console.log(countSpaces("ch an el and Jub ilee"));


// July 6th 2021
// DONE: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]

function capitalizeAllNames(array){
    var tester = [];
    for(let i = 0; i < array.length; i++){
        tester[i] = array[i].toUpperCase();
    }
    return tester;
}

console.log()

// DONE: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]

function capitalizeFirstLetter(array){
    var tester = [];

    for(let i = 0; i < array.length; i++){
        tester[i] = array[i].charAt(0).toUpperCase() + array[i].substr(1);
    }
    return tester;
}


// July 7th 2021
// DONE: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65
}

    personOne.getFullName = function (){
        return this.firstName + " " + this.lastName;
    }


// DONE: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73
}

personTwo.getNicelyFormattedFullName = function (){
    return this.firstName.charAt(0).toUpperCase() + this.firstName.substr(1) + " " + this.lastName.charAt(0).toUpperCase()
            + this.lastName.substr(1);
}

// DONE: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62
}

personThree.intro = function (){
    return "Hello, my name is " + this.firstName.charAt(0).toUpperCase() +
        this.firstName.substr(1)+ " " + this.lastName.charAt(0).toUpperCase()
        + this.lastName.substr(1) + " and I am " + this.ageInYears + " years old"
}
