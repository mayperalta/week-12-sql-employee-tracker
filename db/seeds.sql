-- add a department
INSERT INTO department(name)
VALUES  ("Human Resources").
        ("Management"),
        ("Operations"),
        ("Sales");

-- add an role
INSERT INTO role(title, salary, department_id)
VALUES  ("President", "$200,000", 1 ),
        ("Secretary", "$60,000", 1),
        ("HR Manager", "$80,000", 2),
        ("Project Manager", "$100,000", 3 ),
        ("Programmer", "$80,000", 3),
        ("Sales Manager", "$80,000", 4 );
        

-- add an employee
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ("Peter", "Pan", 1, NULL ), 
        ("Wendy", "Lewis", 1, 1 ),
        ("Aubrey", "Wilson", 2, 1 ),
        ("Chris", "King", 3, 1 ),
        ("Carlos", "Sanchez", 3, 4 ),
        ("Leslie", "Lee", 4, 1 );
        