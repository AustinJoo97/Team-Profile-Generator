const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager'
    }

    createCard(){
        return `
            <div class='employeeCard' id=${this.getID()}>
                <div class='cardHead'>
                    <h1>${this.getName()}</h1>
                    <h2>${this.getRole()}</h2>
                </div>
                <div class='memberInfo'>
                    <p class='id'>
                        ID: ${this.getID()}
                    </p>
                    <p class='email'>
                        Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a>
                    </p>
                    <p class='officeNumber'>
                        Office Number: ${this.officeNumber}
                    </p>
                </div>
            </div>`
    }
}


module.exports = Manager;