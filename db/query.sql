-- view all departments
SELECT department.name, department_id as department names, department_ids
FROM department
ORDER BY department.name ASC;

-- view all roles
SELECT role.title, role.id, department.name, role.salary
as job_title, role_id, department_name, salary
FROM department
LEFT JOIN role
ON department_id = role.department_id
ORDER BY department.name ASC;

-- view all employees
SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, employee.manager_id
as employee_ids, first_names, last_names, job_titles, departments, salaries, manager_ids
FROM employee
LEFT JOIN role
ON employee.role_id = role.id
ORDER BY employee.last_name ASC;

