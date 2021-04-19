class Manager {
    constructor(name, id, email, officeNum){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = officeNum;
    }

    createCard(){
        return `
        <div id=${this.id}>
            <div class='cardHead'>
                <h1>${this.name}</h1>
                <h2>Manager</h2>
            </div>
            <div class='MemberInfo'>
                <p class='email'>
                    Email: ${this.email}
                </p>
                <p class='officeNum'>
                    Office Number: ${this.officeNum}
                </p>
            </div>
        </div>`
    }
}


module.exports = Manager;