//7/1

// DONE: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countSpaces(string){
    if (typeof string != "string"){
        return false;
    }

    var spaces = 0;
    for (let i = 0; i < string.length; i++){
        if (string.chatAt(i) === ""){
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
        tester[i] = array[i].charAt(0) + array[i].substr(1);
    }
    return tester;
}
