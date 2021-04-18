const inquirer = require('inquirer');
const employeeCards = document.getElementById('employeeCards');

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
    .then((response) => {
        console.log(response);
    })
}