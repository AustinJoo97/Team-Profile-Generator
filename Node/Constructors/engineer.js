class Engineer {
    constructor(name, id, email, gitHub){
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
    }

    createCard(){
        return `
            <div class='employeeCard' id=${this.id}>
                <div class='cardHead'>
                    <h1>${this.name}</h1>
                    <h2>Engineer</h2>
                </div>
                <div class='memberInfo'>
                    <p class='email'>
                        Email: ${this.email}
                    </p>
                    <p class='gitHubProfile'>
                        GitHub Profile: <a href='https://github.com/${this.gitHub}' target='_blank'>${this.gitHub}</a>
                    </p>
                </div>
            </div>`
    }
}

module.exports = Engineer;