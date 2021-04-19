const inquirer = require('inquirer');
const employeeCards = document.getElementById('employeeCards');

function init(){
    managerCardCreation();
};

function managerCardCreation(){
    let nextMember;
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter Team Manager\'s Name: ',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'Please enter Team Manager\'s ID:',
            name: 'managerID'
        },
        {
            type: 'input',
            message: 'Please enter Team Manager\'s email: ',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'Please enter Team Manager\'s office number: ',
            name: 'managerOfficeNumber'
        }
    ])
    .then((response) => {
        console.log(response);
        // Create manager card
        // Run inquirer to ask what type of employee next is
        // Based on that answer, determine what nextMember must be set to in order to determine which function must be run
    })
};

function engineerCardCreation(){
    let nextMember;
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter Engineer\'s Name: ',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'Please enter Engineer\'s ID:',
            name: 'engineerID'
        },
        {
            type: 'input',
            message: 'Please enter Engineer\'s email: ',
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: 'Please enter Engineer\'s GitHub handle: ',
            name: 'engineerGitHub'
        }
    ])
    .then((response) => {
        console.log(response);
    })
};

function internCardCreation(){
    let nextMember;
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter Intern\'s name: ',
            name: 'internName'
        },
        {
            type: 'input',
            message: 'Please enter Intern\'s ID:',
            name: 'internID'
        },
        {
            type: 'input',
            message: 'Please enter Intern\'s email: ',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'Please enter Intern\'s school name: ',
            name: 'internSchool'
        }
    ])
    .then((response) => {
        console.log(response);
    })
};