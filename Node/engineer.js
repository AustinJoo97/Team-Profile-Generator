const Employee = require('./employee')

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub(){
        return this.gitHub;
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
                    <p class='id>
                        ID: ${this.getID()}
                    <p>
                    <p class='email'>
                        Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a>
                    </p>
                    <p class='gitHubProfile'>
                        GitHub Profile: <a href='https://github.com/${this.getGitHub()}' target='_blank'>${this.getGitHub()}</a>
                    </p>
                </div>
            </div>`
    }
}

module.exports = Engineer;