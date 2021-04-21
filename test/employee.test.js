const { getMaxListeners } = require('process');
const Employee = require('../Node/employee');

describe('getName() method', () => {
    it('should return a newly created employees name', () => {
        const newEmployee = new Employee('Jim', '000', 'jimtest@gmail.com')

        expect(newEmployee.getName()).toEqual('Jim')
    })
})

describe('.getID() method', () => {
    it('should return the id for a new instance of Employee', () => {
        const newEmployee = new Employee('Jim', '000', 'jimtest@gmail.com')

        expect(newEmployee.getID()).toEqual('000')
    })
})

describe('.getEmail() method', () => {
    it('should return the email address for a new instance of Employee', () => {
        const newEmployee = new Employee('Jim', '000', 'jimtest@gmail.com')

        expect(newEmployee.getEmail()).toEqual('jimtest@gmail.com')
    })
})

describe('.getRole() method', () => {
    it('should return "employee" as the role for the new instance of Employee', () => {
        const newEmployee = new Employee('Jim', '000', 'jimtest@gmail.com')

        expect(newEmployee.getRole()).toEqual('Employee')
    })
})