const inquirer = require('inquirer');
const Manager = require('./Constructors/manager');
const Engineer = require('./Constructors/engineer');
const Intern = require('./Constructors/intern');
// const employeeCards = document.getElementById('employeeCards');

function managerCardCreation(){
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
    .then((managerInfo) => {
        let manager = new Manager(managerInfo.managerName, managerInfo.managerID, managerInfo.managerEmail, managerInfo.managerOfficeNumber);
        console.log(manager);
        // Create manager card
        // Run inquirer to ask what type of employee next is
        nextMember();
    })
};

function engineerCardCreation(){
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
    .then((engineerInfo) => {
        let engineer = new Engineer(engineerInfo.engineerName, engineerInfo.engineerID, engineerInfo.engineerEmail, engineerInfo.engineerGitHub);
        console.log(engineer);
        nextMember();
    })
};

function internCardCreation(){
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
    .then((internInfo) => {
        let intern = new Intern(internInfo.internName, internInfo.internID, internInfo.internEmail, internInfo.internSchool);
        console.log(intern);
        nextMember();
    })
};

function nextMember(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add another member to your team?',
            name: 'nextMember',
            choices: ['Engineer', 'Intern', 'Done Adding Members'],
            default: 'Done Adding Members'
        }
    ])
    .then((response) => {
        if(response.nextMember === 'Engineer'){
            engineerCardCreation()
        } else if(response.nextMember === 'Intern'){
            internCardCreation()
        } else {
            return;
        }
    })
}

managerCardCreation()