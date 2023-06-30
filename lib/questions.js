const db = require('../server')
const selectOptions = require('./selectOptions')
const {listDepartments, listRoles, listEmployees} = require ('./retrieve')

// Create an array of questions for user input 
const questions = [
    // prompts user to select what he wants to do
    {
        type: 'list',
        message: 'What do you want to do?',
        name: 'option',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    }
]

const questions2 = [
    // add department
    {
        type: 'input',
        message: 'Enter Department: ',
        name: 'department',
    },
    // add role 
    {
        type: 'input',
        message: 'Enter Title: ',
        name: 'roleTitle',
    },
    {
        type: 'input',
        message: 'Enter Salary: ',
        name: 'roleSalary',
    },
    {
        type: 'list',
        message: 'Select Department: ',
        name: 'roleDepartment',
        choices: listDepartments
    },
    // add an employee
    {
        type: 'input',
        message: 'Enter First Name:  ',
        name: 'employeeFirstName',
    },
    {
        type: 'input',
        message: 'Enter Last Name:  ',
        name: 'employeeLastName',
    },
    {
        type: 'list',
        message: 'Select Role: ',
        name: 'employeeRole',
        choices: listRoles
    },
    {
        type: 'list',
        message: 'Select Manager: ',
        name: 'employeeManager',
        choices: listEmployees
    },
    // update an employee role
    {
        type: 'list',
        message: 'Select Employee: ',
        name: 'updateEmployee',
        choices: listEmployees
    },
    {
        type: 'list',
        message: 'Select new role: ',
        name: 'updateRole',
        choices: listEmployees
    }
];

module.exports = questions; 