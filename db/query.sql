-- "View all departments", "View all roles", "View all employees"
-- "Add a department", "Add a role", "Add an employee"
-- "Update an employee role"

-- view all departments
SELECT department.id, department.name 
AS department_name
FROM department 
ORDER BY department.id asc;

-- view all roles
SELECT 
    role.id,
    role.title,
    role.salary,
    department.name
AS  department_name
FROM
    department
LEFT JOIN role ON 
    department.id = role.id;

-- view all employees
SELECT 
    employee.id,
    employee.first_name,
    employee.last_name, 
    role.title, 
    role.id,
    role.salary,
    department.name,
    CONCAT (manager.first_name, SPACE(1), manager.last_name)
AS 
    manager
FROM
    employee
LEFT JOIN role ON 
    employee.role_id = role.id
LEFT JOIN department ON 
    role.department_id = department.id
LEFT JOIN employee manager ON 
    employee.manager_id = manager.id;

-- add a department
INSERT INTO department(name)
VALUES  ("Marketing")

-- add a role
INSERT INTO role(title, salary, department_id)
VALUES  ("Marketing Manager", 90000.00,  5 )

-- add an employee
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ("Rosie", "Redd", 5, 1 )

-- update an employee role 
UPDATE employee
SET role_id = 7
WHERE id = 7;
