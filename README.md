# Team ProfileGenerator ![License](https://img.shields.io/badge/License-ISC-blue.svg)
Command-line application that takes information about a development team and creates an html page using this information

## Deployed Site Link 

N/a


## Table of Contents

- [Description, Setup, and Installation](#description-setup-and-installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Full License Information](#license-information)
- [Conrtibutors](#contributors)
- [Testing Performed](#testing-performed)
- [Questions](#questions)


## Description, Setup, and Installation

This program was created to allow any user to create a simple card rendering displaying the basic information for their team of engineers. Utilizing the NPM inquirer command-line interface, users can utilized node to create and render a styled HTML with cards denoting the info for all team memebers, including their role, name, ID, email, and either a github handle for engineers or school for interns. Additionally, clicking on a member's email will compose an email to the clicked address in the user's default email application whereas clicking a github handle will redirect the user to the selected github page in a new tab.

The application can be setup and installed using node via the "npm init" (to initialize node) and "npm install/i" (to install all dependencies) to acquire all the necessary components to successfully run the application. From here, the command "node index.js" from the main directory can be used to run the app and begin creating a team member page.

To perform tests on the application using the devvelopment depenency "Jest," the "npm test" command can be used to run all test cases established.

## Usage
As stated, this program serves as a method to create a well organized and easily manageable HTML file that contains all of the basic necessary information for a team's manager, engineers, and interns.
## Technologies Used
- JavaScript
- Node.JS
- NPM
- NPM - Inquirer

Secondary
- HTML
- CSS

## License Information
![License](https://img.shields.io/badge/License-ISC-blue.svg)

[License Link](https://opensource.org/licenses/ISC)

## Contributors
- Austin Joo

## Testing Performed
The development dependency "jest" was used in order to perform unit tests on the application's components. As there are imported classes that are used throghout the application itself, multiple tests were performed to ensure proper argument passing, successful team memeber generation, and to successful module exporting between multiple js files that were utilized to both create new classes as well as generate template HTML text that would, ultimately, be combined to create a single, nicely rendered HTML file that holds all the information about a team's memebers.

## Questions
Please contact me with any questions, comments, or concerns regarding this repo or if you would like to be a fellow contributor to this project!
- GitHub: AustinJoo97 
- Email: austinjoo1997@gmail.com

## Demonstration
![NPM Demo](./demo/Demo.gif)
