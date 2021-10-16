const inquirer = require('inquirer');
const fs = require ('fs');

const promptUser = () => {
    return inquirer.prompt([
// Question 1: What is your Team Manager's name?
{
    type: "input",
    name: "managerName",
    message: "What is your Team Manager's name?"

},

// Question 2: What is your Team Manager's employee ID?
{
    type: "input",
    name: "managerID",
    message: "What is your Team Manager's employee ID?"

},

// Question 3: What is your Team Manager's email?
{
    type: "input",
    name: "managerEmail",
    message: "What is your Team Manager's email?"

},

// Question 4: What is your Team Manager's office phone number?
{   
    type: "input",
    name: "managerPhone",
    message: "What is your Team Manager's office phone number?"

},

// Question 5:  What is your Intern's name?
{   
    type: "input",
    name: "internName",
    message: "What is your Intern's name?"

},

// Question 6: What is your Intern's employee ID?
{
    type: "input",
    name: "internID",
    message: "What is your Intern's employee ID?"

},

// Question 7: What is your Intern's email?
{
    type: "input",
    name: "internEmail",
    message: "What is your Intern's email?"

},

// Question 8: What is the name of your Intern's school?
{
    type: "input",
    name: "internSchool",
    message: "What is the name of your Intern's school?"

},

// Question 9: What is your Engineer's name?
{
    type: "input",
    name: "engineerName",
    message: "What is your Engineer's name?"

},

// Question 10: What is your Engineer's employee ID?
{
    type: "input",
    name: "engineerID",
    message: "What is your Engineer's employee ID?"

},

// Question 11: What is your Engineer's email?
{
    type: "input",
    name: "engineerEmail",
    message: "What is your Engineer's email?"

},

// Question 12: What is your Engineer's GitHub?
{
    type: "input",
    name: "github",
    message: "What is your Engineer's GitHub?"

},
    ]);
        };

        const generateHTML = ({ managerName, managerID, managerEmail, managerPhone, internName, internID, 
            internEmail, internSchool, engineerName, engineerID, engineerEmail, github}) => `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <link href = "stylesheet.css" rel="stylesheet">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
                <title> Team Profile </title>
            </head>
            <body>
            
            <h1> My Team </h1>
            
    <div class = "containers"> 
            <div class = "manager" id= "manager-info">
                <h5> Team Manager </h5>
            <h2> ${managerName} </h2>
            <p> Employee ID: ${managerID} </p>
            <p> Email: <a href = "mailto:${managerEmail}"> Contact Manager </a> </p>
            <p> Office Phone: ${managerPhone} </p>
            </div>
            
            
            <div class = "intern" id = "intern-info">
                <h3> Intern </h3>
            <h2> ${internName} </h2>
            <p> Employee ID: ${internID} </p>
            <p> Email: <a href = "mailto:${internEmail}"> Contact Intern </a> </p>
            <p> School: ${internSchool} </p>
            </div>
            
            
            <div class = "engineer" id = "engineer-info">
                <h4> Engineer </h4>
            <h2> ${engineerName} </h2>
            <p> Employee ID: ${engineerID} </p>
            <p> Email: <a href = "mailto:${engineerEmail}"> Contact Engineer </a> </p>
            <p> <a href = "https://github.com/${github}"> Visit Engineer's GitHub </p>
            
            
        </div>
                </div>
            </body>
            </html>
     `;

     const init = () => {
        promptUser()
        .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
    
    };
    
    init();