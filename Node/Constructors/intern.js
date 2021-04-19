class Intern {
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    createCard(){
        return `
            <div class='employeeCard' id=${this.id}>
                <div class='cardHead'>
                    <h1>${this.name}</h1>
                    <h2>Intern</h2>
                </div>
                <div class='memberInfo'>
                    <p class='id>
                        ID: ${this.id}
                    <p>
                    <p class='email'>
                        Email: <a href="mailto:${this.email}">${this.email}</a>
                    </p>
                    <p class='schoolName'>
                        School: ${this.school}
                    </p>
                </div>
            </div>`
    }
}

module.exports = Intern;