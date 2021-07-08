//TODO: 1
//Create a function called removeDuplicates that accepts an array of strings and
// returns the array with all duplicate elements filtered out.

//Examples
    // removeDuplicates(["bob","squid","samantha","bob"]);
    // // Should return the following
    // ["bob","squid","samantha"]
    //
    // removeDuplicates(["tilda","tilda"]);
    // // Should return the following
    // ["tilda"]
    //
    // removeDuplicates(["2016-02-13","1994-12-21","2016-02-13","2016-02-13","2005-11-29"]);
    // // Should return the following
    // ["1994-12-21","2016-02-13","2005-11-29"]

function removeDuplicates(array){
    var testArray = [array[0]];
    for(let i = 1; i < array.length; i++){
        for(let x = 0; x < testArray.length; x++){
            if(array[i] == testArray[x]){

            }
        }
    }

}
//-------DONE----

//2
//Create a function called max that accepts an array of numbers and returns the largest number from that array.

//Examples
     console.log(max([4,34,193,2,345,46,0]));
    // Should return the following
    //345

    console.log(max([-34,83,21,38,-2039,3.2]));
    // Should return the following
    //83

    console.log(max([54.5,2,34,-93]));
    // Should return the following
    //54.5

function max(array){
    var max = -Infinity;
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

//----
//TODO: 3
//Create a function called mostOccuringNumber that accepts an array of numbers and
// returns the number that occurs the most within that array.

//Examples
    //mostOccuringNumber([8,93,28,8,27,-62,32,8,-62]);
    // Should return the following
    // 8
    // mostOccuringNumber([8,93,-62.0,28,27,-62,32,8,-62]);
    // Should return the following
    // -62
    // mostOccuringNumber([73.5,8,0,-3,3.50,8.25,3.50]);
    // Should return the following
    // 3.5


//---DONE---
//4
//Create a function called whoIsPassing that accepts an array of objects, where each object
// is a student's name and class average (from 0 to 100).
// Your function will return an array of objects where each object is a student's
// name and whether he/she is passing. Note that a class average of 60 and higher is passing.

//Examples
var students = [
    {
        name: "Phill Rundy",
        classAverage: 53
    },
    {
        name: "Samuel Moore",
        classAverage: 71
    },
    {
        name: "Mark Tendly",
        classAverage: 84
    },
    {
        name: "Dough Mosh",
        classAverage: 87
    },
    {
        name: "Bran Thomb",
        classAverage: 93
    },
    {
        name: "Mario Yushi",
        classAverage: 82
    },
    {
        name: "Nathan Skywalker",
        classAverage: 52
    }
]

console.log(whoIsPassing(students));
//// Should return the following
// [
//     {
//         name: "Phill Rundy",
//         passing: false
//     },
//     {
//         name: "Samuel Moore",
//         passing: true
//     },
//     {
//         name: "Mark Tendly",
//         passing: true
//     },
//     {
//         name: "Dough Mosh",
//         passing: true
//     },
//     {
//         name: "Bran Thomb",
//         passing: true
//     },
//     {
//         name: "Mario Yushi",
//         passing: true
//     },
//     {
//         name: "Nathan Skywalker",
//         passing: false
//     }
// ]


function whoIsPassing(object){
    var studentInfo = [];
    for(let i = 0; i < object.length; i++){
        var passing;
        if(object[i].classAverage >= 60){
            passing = true;
        }
        else{passing= false}
        var student = {
            name: object[i].name,
            passing: passing
        }
        studentInfo.push(student);
    }
    return studentInfo;
}


//-----DONE----
//5
//Create a function called dateStringToObject that accepts a date in the following string
// format "YYYY-MM-DD" and returns an object that contains month, day, and year properties.

//Examples
console.log(dateStringToObject("2016-2-13"));
// Should return the following
//{month: 2, day: 13, year: 2016}

console.log(dateStringToObject("2005-11-29"));
// Should return the following
//{month: 11, day: 29, year: 2005}

console.log(dateStringToObject("1994-12-21"));
// Should return the following
//{month: 12, day: 21, year: 1994}

function dateStringToObject(date){
    var array = date.split("-");
    var object = {
        month: array[1],
        day: array[2],
        year: array[0]
    }
    return object;
}


//----DONE----
//6
//Create a function called reverseString that that accepts a string and
// returns a string with the characters in reverse order.

//Examples
console.log(reverseString("squid"));
// Should return the following
//"diuqs"

console.log(reverseString("tilda"));
// Should return the following
//"adlit"

console.log(reverseString("2016-02-13"));
// Should return the following
//"31-20-6102"


function reverseString(string){
    var reverse = "";
    for(let i = string.length; i > -1; i--){
        reverse = reverse + string.charAt(i);
    }
    return reverse;
}

//-----DONE---
//7
//Create a function called numberInfo that accepts a number and returns an object
// with the properties isPositive, isEven, isZero. The properties should either be
// true or false based on if the parameter meets the criteria.

//Examples
console.log(numberInfo(-1));
// Should return the following
//{
    // isPositive: false,
    // isEven: false,
    // isZero: false
//}

console.log(numberInfo(6));
// Should return the following
//{
// isPositive: true,
//isEven: true,
// isZero: false
//}

console.log(numberInfo(0));
// Should return the following
//{
// isPositive: false,
//isEven: true,
//isZero: true
//}

function  numberInfo(number){
    var isPositive = false;
    var isEven = false;
    var isZero = false;

    if(number > 0){
        isPositive = true;
    }
    if(number % 2 == 0){
        isEven = true;
    }
    if(number == 0){
        isZero = true;
    }

    var object = {
        isPositive: isPositive,
        isEven: isEven,
        isZero: isZero
    }
    return object;
}
