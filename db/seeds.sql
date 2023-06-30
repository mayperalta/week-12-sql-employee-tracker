INSERT INTO department(name)
VALUES  ("Management"),
        ("Human Resources"),
        ("Information Technology"),
        ("Sales");

INSERT INTO role(title, salary, department_id)
VALUES  ("President", 200000.00,  1 ),
	("Secretary", 60000.00, 1),
        ("HR Manager", 80000.00, 2),
        ("Project Manager", 100000.00, 3 ),
        ("Programmer", 80000.00, 3),
        ("Sales Manager", 80000.00, 4 );
        

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ("Peter", "Pan", 1, NULL ), 
        ("Wendy", "Lewis", 1, 1 ),
        ("Aubrey", "Wilson", 2, 1 ),
        ("Chris", "King", 3, 1 ),
        ("Carlos", "Sanchez", 3, 4 ),
        ("Leslie", "Lee", 4, 1 );
        