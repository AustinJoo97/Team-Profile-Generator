class Intern {
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    createCard(){
        return `
            <div id=${this.id}>
                <div class='cardHead'>
                    <h1>${this.name}</h1>
                    <h2>Intern</h2>
                </div>
                <div class='MemberInfo'>
                    <p class='email'>
                        Email: ${this.email}
                    </p>
                    <p class='schoolName'>
                        School: ${this.school}
                    </p>
                </div>
            </div>`
    }
}

module.exports = Intern;