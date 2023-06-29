// Create an array of questions for user input 
const questions = [
    // prompts user to select what he wants to do
    {
        type: 'list',
        message: 'What do you want to do?',
        name: 'option',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    },
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
        choices: ["Management", "Human Resources", "Information Technology", "Sales"]
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
        choices: ["Management", "Human Resources", "Information Technology", "Sales"]
    },
    {
        type: 'list',
        message: 'Select Manager: ',
        name: 'employeeManager',
        choices: ["Peter Pan", "Wendy Lewis", "Aubrey Wilson", "Chris King", "Carlos Sanchez", "Leslie Lee"]
    },
    // update an employee role
    {
        type: 'list',
        message: 'Select Employee: ',
        name: 'updateEmployee',
        choices: ["Peter Pan", "Wendy Lewis", "Aubrey Wilson", "Chris King", "Carlos Sanchez", "Leslie Lee"]
    },
    {
        type: 'list',
        message: 'Select new role: ',
        name: 'updateRole',
        choices: ["Peter Pan", "Wendy Lewis", "Aubrey Wilson", "Chris King", "Carlos Sanchez", "Leslie Lee"]
    }
];

module.exports = questions; 