class Manager {
    constructor(name, id, email, officeNum){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = officeNum;
    }

    createCard(){
        return `
            <div class='employeeCard' id=${this.id}>
                <div class='cardHead'>
                    <h1>${this.name}</h1>
                    <h2>Manager</h2>
                </div>
                <div class='memberInfo'>
                    <p class='id>
                        ID: ${this.id}
                    <p>
                    <p class='email'>
                        Email: <a href="mailto:${this.email}">${this.email}</a>
                    </p>
                    <p class='officeNum'>
                        Office Number: ${this.officeNum}
                    </p>
                </div>
            </div>`
    }
}


module.exports = Manager;