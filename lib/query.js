const db = require('../server')

// view all departments
function allDepartments() {
    db.query(`
    SELECT department.id, department.name AS department_name
        FROM department 
        ORDER BY department.id asc;`,
    (err, res) => {
        if (err) throw err; 
        console.table(res);
        const userSelect = require('./userOptions.js');
        //userSelect();
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
        userSelect();
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
        userSelect();
    }
    )
};

// add a department
function addDepartment() {
    db.query(`
    INSERT INTO department(name)
        VALUES  (${response.department}); `,
    (err, res) => {
        if (err) throw err; 
        console.table(res);
        const userSelect = require('./userOptions.js');
        userSelect();
    }
    )
};

// add a role 
function addRole() {
    db.query(`
    INSERT INTO role(title, salary, department_id)
        VALUES  (${response.title}, ${response.salary}, ${response.department_id}); `,
    (err, res) => {
        if (err) throw err; 
        console.table(res);
        const userSelect = require('./userOptions.js');
        userSelect();
    }
    )
};

// add an employee
function addEmployee() {
    db.query(`
    INSERT INTO employee(first_name, last_name, role_id, manager_id)
        VALUES  (${response.first_name}, ${response.last_name}, ${response.role_id}, ${response.manager_id} ); `,
    (err, res) => {
        if (err) throw err; 
        console.table(res);
        const userSelect = require('./userOptions.js');
        userSelect();
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
        userSelect();
    }
    )
};

module.exports = allDepartments; 






module.exports = {allDepartments, allEmployees};

// allRoles, allEmployees, addDepartment, addRole, addEmployee, updateRole