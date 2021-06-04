"use strict";

//exercise 2 //DONE
function showMultiplicationTable(input)
{
    for(let i = 1; i < 11; i++)
    {
        console.log(input + " x " + i + " = " + input * i);
    }
}

//exercise 3 // DONE
for(let x = 1; x < 11; x++)
{
    var RandomNumber = Math.floor(Math.random() * (200-20) +20);
    if(RandomNumber % 2 == 0)
    {
        console.log(RandomNumber + " is even");
    }
    else
    {
        console.log(RandomNumber + " is odd");
    }
}

//exercise 4: not looking that right?
for(let i = 1; i < 10; i++)
{
    var x = 0;
    while (x < i)
    {
        console.log(i);
        x++;
    }
}

//exercise 5 // DONE
for(var w = 100; w >= 5; w -= 5)
{
    console.log(w);
}



