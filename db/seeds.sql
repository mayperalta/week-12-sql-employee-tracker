INSERT INTO department(name)
VALUES  ("Management"),
        ("Human Resources"),
        ("Information Technology"),
        ("Sales");

INSERT INTO role(title, salary, department_id)
VALUES  ("President", 200000.00,  1 ),
	("Secretary", 50000.00, 1),
        ("HR Manager", 80000.00, 2),
        ("IT Manager", 100000.00, 3 ),
        ("Sales Manager", 80000.00, 4 );
        

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ("Peter", "Pan", 1, NULL ), 
        ("Wendy", "Lewis", 2, 1 ),
        ("Aubrey", "Wilson", 3, 1 ),
        ("Chris", "King", 4, 1 ),
        ("Leslie", "Lee", 6, 1 );