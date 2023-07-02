const inquirer = require ('inquirer');
const questions = require ('./questions');
const db = require('../server')
const {listDepartments} = require('./retrieve')


//const {allDepartments, allRoles, allEmployees} = require('./query');

// tasks that users select on terminal 
function userOptions () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What do you want to do?',
            name: 'option',
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
        }
    ]).then (response => {
        switch (response.option) {
            case "View all departments":
                allDepartments();
                break;
            case "View all roles":
                allRoles();
                break;
            case "View all employees":
                allEmployees();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update an employee role":
                updateRole();
                break;
        }  
    })

   
}

// view all departments 
function allDepartments() {
    db.query(`
    SELECT department.id, department.name AS department_name
        FROM department 
        ORDER BY department.id asc;`,
    (err, res) => {
        if (err) throw err; 
        console.table(res);
        //const userSelect = require('./userOptions.js');
        userOptions();
    }
    )
};

// view all roles
function allRoles() {
    db.query(`
    SELECT role.id, role.title, role.salary, department.name AS  department_name
        FROM department
        LEFT JOIN role ON 
            department.id = role.id
        ORDER BY role.id asc; `,
    (err, res) => {
        if (err) throw err; 
        console.table(res);
        const userSelect = require('./userOptions.js');
        userOptions();
    }
    )
};

// view all employees
function allEmployees() {
    db.query(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title,  role.id, role.salary, department.name, CONCAT (manager.first_name, SPACE(1), manager.last_name)
        AS manager
        FROM employee
        LEFT JOIN role ON 
            employee.role_id = role.id
        LEFT JOIN department ON 
            role.department_id = department.id
        LEFT JOIN employee manager ON 
            employee.manager_id = manager.id; `,
    (err, res) => {
        if (err) throw err; 
        console.table(res);
        const userSelect = require('./userOptions.js');
        userOptions();
    }
    )
};

// add a department
function addDepartment() {
    inquirer.prompt([{
        type: 'input',
        message: 'Enter new department: ',
        name: 'department',
    } 
]).then (response => {
    db.query(`
    INSERT INTO department
        SET ?
    `, {name: response.department}
    ),
    userOptions();
})
}; 

// ad a role
const addRole = () => {
    db.query("SELECT * FROM department", function (err, results){
    if (err) throw err;
    inquirer
    .prompt([{
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
        choices: results.map(item => item.name)
    },
    ])
    .then((response) => {
        const selectedDepartment = results.find(item => item.name===response.roleDepartment)

        db.query(
          `INSERT INTO role SET ?`, {
            title: response.roleTitle,
            salary: response.roleSalary,
            department_id: selectedDepartment.id
          },
          function (err) {
              if (err) throw err;
              console.log("Added " + response.roleTitle + " Role!");
              console.log(response.roleTitle, response.roleSalary, selectedDepartment.id)
              userOptions();
          }  
        )
    })
    })
    }
    
// add an employee
const addEmployee = () => {
    db.query("SELECT * FROM role", function (err, results){
    if (err) throw err;
    inquirer
    .prompt([{
        type: 'input',
        message: 'Enter First Name:  ',
        name: 'firstName',
    },
    {
        type: 'input',
        message: 'Enter Last Name:  ',
        name: 'lastName',
    },
    {
        name: `role_id`,
        type: `list`,
        message: `Select a new role`,
        choices: results.map(item => item.title)
    },
    ])

.then((response) => {
    const selectedRole = results.find(item => item.title===response.role_id)
    const employeeFirstName = response.firstName;
    const employeeLastName = response.lastName;
        db.query("SELECT * FROM employee", function (err, results){
        if (err) throw err;
        inquirer
        .prompt([{
    name: `manager_id`,
    type: `list`,
    message: `Select the Manager for this employee.`,
    choices: results.map(item => item.first_name)
    }
    ])
    .then((response) => {
         const selectedManager = results.find(item => item.first_name===response.manager_id)

        db.query(
          "INSERT INTO employee SET ?", {
            first_name: employeeFirstName,
            last_name: employeeLastName,
            role_id: selectedRole.id,
            manager_id: selectedManager.id
          },
          function (err) {
              if (err) throw err;
              console.log("Added " + employeeFirstName + " " + employeeLastName + " to the team!");
              userOptions();
          }  
        )
    })
    })
    })
    })
    }

// update employee role
const updateRole = () => {
    db.query("SELECT * FROM employee", function (err, results){
    if (err) throw err;
    inquirer
    .prompt([{
        name: `employeeUpdate`,
        type: `list`,
        message: `Select the employee to upate: `,
        choices: results.map(item => item.first_name)
        },
    ])

.then((response) => {
    const updateEmployee = (response.employeeUpdate)
    db.query("SELECT * FROM role", function (err, results){
        if (err) throw err;
        inquirer
        .prompt([
    {
        name: `role_id`,
        type: `list`,
        message: `Select new role: `,
        choices: results.map(item => item.title)
    },
])
    .then((response) => {
        const selectedRole = results.find(item => item.title===response.role_id)
        // test
        console.log(selectedRole)

        db.query(
          "UPDATE employee SET ? WHERE first_name = " + "'" + updateEmployee + "'", {
            role_id: "" + selectedRole.id + "",
          },
          function (err) {
              if (err) throw err;
              console.log("Successfully updated " + updateEmployee + "'s role to " + response.role_id + "!");
              userOptions();
          }  
        )
    })
    })
    })
    })
}



// display task list after running each task
userOptions();

module.exports = userOptions; 