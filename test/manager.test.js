const Manager = require('../Node/manager');

describe('arguments passed via super in Manager constructor', () => {
    it('should return new Manager id', () => {
        const newManager = new Manager('Bill', '000', 'billmanager@gmail.com', '01')

        expect(newManager.getName()).toEqual('Bill');

        expect(newManager.getID()).toEqual('000');

        expect(newManager.getEmail()).toEqual('billmanager@gmail.com');
    });
});

describe('officeNumber property', () => {
    it('should return the officeNumber property of new instance of Manager', () => {
        const newManager = new Manager('Bill', '000', 'billmanager@gmail.com', '01')

        expect(newManager.officeNumber).toEqual('01')
    })
})

describe('.getRole() method', () => {
    it('should return "Manager" as the role, overriding the inherited "Employee" role from extended Employee constructor', () => {
        const newManager = new Manager('Bill', '000', 'billmanager@gmail.com', '01')

        expect(newManager.getRole()).toEqual('Manager')
    })
})