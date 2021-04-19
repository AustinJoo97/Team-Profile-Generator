class Engineer {
    constructor(name, id, email, gitHub){
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
    }

    createCard(){
        return `
            <div id=${this.id}>
                <div class='cardHead'>
                    <h1>${this.name}</h1>
                    <h2>Engineer</h2>
                </div>
                <div class='MemberInfo'>
                    <p class='email'>
                        Email: ${this.email}
                    </p>
                    <p class='gitHubProfile'>
                        GitHub Profile: ${this.gitHub}
                    </p>
                </div>
            </div>`
    }
}

module.exports = Engineer;