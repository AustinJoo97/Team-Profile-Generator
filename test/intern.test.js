const Intern = require('../node/intern');

describe('arguments passed via super in Intern constructor', () => {
    it('should return new Intern name, id, and info', () => {
        const newIntern = new Intern('Sally', '000', 'SallyIntern@gmail.com', 'sally\'s school name')

        expect(newIntern.getName()).toEqual('Sally');

        expect(newIntern.getID()).toEqual('000');

        expect(newIntern.getEmail()).toEqual('SallyIntern@gmail.com');
    });
});

describe('.getGitHub() method', () => {
    it('should return the github handle of new instance of Intern', () => {
        const newIntern = new Intern('Sally', '000', 'SallyIntern@gmail.com', 'sally\'s school name')

        expect(newIntern.getSchool()).toEqual('sally\'s school name')
    })
})

describe('.getRole() method', () => {
    it('should return "Intern" as the role, overriding the inherited "Employee" role from extended Employee constructor', () => {
        const newIntern = new Intern('Sally', '000', 'SallyIntern@gmail.com', 'sally\'s school name')

        expect(newIntern.getRole()).toEqual('Intern')
    })
})