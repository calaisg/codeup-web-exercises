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

