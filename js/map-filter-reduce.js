"use strict"
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//use .filter to create array of user objects where each user object has at least 3 languages
// in the language array
// const threeLanguages = users.filter(function (n){
//     return n.languages.length > 2;
// })
const threeLanguages = users.filter(n => n.languages.length > 2);

//use .map to creat array of strings where each element is user's email address
// const usersEmails = users.map(function (n){
//     return n.email;
// });
const usersEmails = users.map(n => n.email);

//use .reduce to get total years of experience from list users. Once get total, can calculate avg
const totalYears = users.reduce((total, currentUser) => {
    return total + currentUser.yearsOfExperience;
}, 0);

//use .reduce to get longest email from list of users
// function findLongest(users){
//     let returnEmail = ""
//     const longestEmail = users.reduce((longest, currentUser) =>{
//         if(currentUser.email.length > longest){
//             longest = currentUser.email.length;
//             returnEmail = currentUser.email;
//         }
//         return returnEmail;
//     }, 0);
//     return longestEmail;
// }
// console.log(findLongest(users));

// //use .reduce to get lists of users name in single string
// const listUsers = users.reduce((userList, currentUser) => {
//     return userList += currentUser.name;
// }, "");
// console.log(listUsers);


