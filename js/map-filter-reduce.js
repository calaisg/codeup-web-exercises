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

//use .reduce to get total years of experience from list users. Once get total, can calculate average
        const totalYears = users.reduce((total, currentUser) => {
            return total + currentUser.yearsOfExperience;
        }, 0);

        let averageYears = totalYears / users.length;

//use .reduce to get longest email from list of users
        const longestEmail = users.reduce((currentLongestEmail, currentUser) => {
            if (currentUser.email.length > currentLongestEmail.length){
                return currentUser.email;
            }
            else{
                return currentLongestEmail;
            }
            },"");

//use .reduce to get lists of users name in single string
        const listUsers = users.reduce((userList, currentUser) => {
           if(userList ===""){
               return "Your instructors are: " + currentUser.name;
           }
           else{
               return userList + ", " + currentUser.name;
           }
        }, "");

        console.log(listUsers)

//use .reduce to get unique list of languages from the list of users
    let concatLanguages = users.reduce((languageList, currentUser) => {
        return languageList.concat(currentUser.languages);
    },"");


    const uniqueLangauges = concatLanguages.reduce((languageList, currentUser) => {
        if(languageList.includes(currentUser)){
            return languageList;
        }
        else{
            languageList.push(currentUser)
            return languageList;
        }
    }, []);

    console.log(uniqueLangauges);


