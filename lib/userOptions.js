const inquirer = require ('inquirer');
const questions = require ('./questions');
const db = require('../server')
//const {allDepartments, allRoles, allEmployees} = require('./query');

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

// add a role 
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

// update a role 
function updateRole() {
    db.query(`
    UPDATE employee
        SET role_id = ${response.role_id}
        WHERE id = ${response.id}; `,
    (err, res) => {
        if (err) throw err; 
        console.table(res);
        const userSelect = require('./userOptions.js');
        userOptions();
    }
    );
};

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


function addRole() {
    db.query(`
    INSERT INTO role(title, salary, department_id)
        VALUES  (${response.title}, ${response.salary}, ${response.department_id}); `,
    (err, res) => {
        if (err) throw err; 
        console.table(res);
        const userSelect = require('./userOptions.js');
        userOptions();
    }
    )
};

function addEmployee() {
    db.query(`
    INSERT INTO employee(first_name, last_name, role_id, manager_id)
        VALUES  (${response.first_name}, ${response.last_name}, ${response.role_id}, ${response.manager_id} ); `,
    (err, res) => {
        if (err) throw err; 
        console.table(res);
        const userSelect = require('./userOptions.js');
        userOptions();
    }
    )
};

// update a role 
function updateRole() {
    db.query(`
    UPDATE employee
        SET role_id = ${response.role_id}
        WHERE id = ${response.id}; `,
    (err, res) => {
        if (err) throw err; 
        console.table(res);
        const userSelect = require('./userOptions.js');
        userOptions();
    }
    )
};





userOptions();

module.exports = userOptions; 