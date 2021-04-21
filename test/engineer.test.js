const Engineer = require('../Node/engineer');

describe('arguments passed via super in Engineer constructor', () => {
    it('should return new Engineer name, id, and email', () => {
        const newEngineer = new Engineer('Bob', '000', 'BobEngineer@gmail.com', 'bobtestgithub')

        expect(newEngineer.getName()).toEqual('Bob');

        expect(newEngineer.getID()).toEqual('000');

        expect(newEngineer.getEmail()).toEqual('BobEngineer@gmail.com');
    });
});

describe('.getGitHub() method', () => {
    it('should return the github handle of new instance of Engineer', () => {
        const newEngineer = new Engineer('Bob', '000', 'BobEngineer@gmail.com', 'bobtestgithub')

        expect(newEngineer.getGitHub()).toEqual('bobtestgithub')
    })
})

describe('.getRole() method', () => {
    it('should return "Engineer" as the role, overriding the inherited "Employee" role from extended Employee constructor', () => {
        const newEngineer = new Engineer('Bob', '000', 'BobEngineer@gmail.com', 'bobtestgithub')

        expect(newEngineer.getRole()).toEqual('Engineer')
    })
})