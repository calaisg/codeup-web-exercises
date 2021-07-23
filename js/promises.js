"use strict"


//Create a function that accepts a GitHub username, and returns a promise that resolves
// returning just the date of the last commit that user made.

function lastCommit(username){
    return fetch('https://api.github.com/users/' + username + '/events',{headers: {'Authorization': 'token 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'}} )
        .then(response => response.json())
        .then(user => console.log("Last push was: " + user[0].created_at));
};

//just return fetch request (no promise thing)
lastCommit("calaisg");



//Write a function named wait that accepts a number as a parameter, and returns a promise that
// resolves after the passed number of milliseconds.

    // function wait(number){
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve();
    //         }, number);
    //     });
    // }

    //OR

    function wait(number){
        return new Promise(resolve => setTimeout(resolve, number));
    };

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));