const Employee = require('./employee')

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern'
    }

    createCard(){
        return `
            <div class='employeeCard' id=${this.getID()}>
                <div class='cardHead'>
                    <h1>${this.getName()}</h1>
                    <h2>${this.getRole()}</h2>
                </div>
                <div class='memberInfo'>
                    <p class='id>
                        ID: ${this.getID()}
                    <p>
                    <p class='email'>
                        Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a>
                    </p>
                    <p class='schoolName'>
                        School: ${this.getSchool()}
                    </p>
                </div>
            </div>`
    }
}

module.exports = Intern;