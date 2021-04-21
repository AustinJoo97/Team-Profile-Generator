const inquirer = require('inquirer');
const Manager = require('./Node/manager');
const Engineer = require('./Node/engineer');
const Intern = require('./Node/intern');
const fs = require('fs');
let fullTeamList = [];

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
        manager = manager.createCard();
        fullTeamList.push(manager);
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
        engineer = engineer.createCard()
        fullTeamList.push(engineer);
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
        intern = intern.createCard();
        fullTeamList.push(intern);
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
            let superString = '';
            fullTeamList.forEach((member) => {
                superString += (member + '\n');
            })
            let htmlTemplate = `
<!DOCTYPE html>
<html>
    <header>
        <meta charset="utf-8">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" type="text/css" href="./reset.css">
        <link rel="stylesheet" type="text/css" href="./style.css">
    </header>
    <body>
        <nav id='navBar'>My Team</nav>
        <div id='employeeCards'>${superString}
        </div>
    </body>
</html>`
            fs.writeFile('./dist/teamMembers.html', htmlTemplate, (err) => {
                err ? console.log(err) : console.log('Success!')
            });
            return;
        }
    })
}

managerCardCreation()