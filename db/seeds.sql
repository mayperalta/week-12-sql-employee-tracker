-- add a department
INSERT INTO department(department_name)
VALUES  ("Human Resources").
        ("Information Technology"),
        ("Communications");

-- add an role
INSERT INTO role(title)
VALUES  ("Manager", "$80,000", 'Human Resources' ),
        ("Manager", "$90,000", 'Information Technology' ),
        ("Manager", "$80,000", 'Communications' ),
        ("Director", "$100,000", 'Human Resources' ),
        ("Director", "$120,000", 'Information Technology' ),
        ("Director", "$100,000", 'Communications' ),
        ("Assistant", "$50,000", 'Human Resources' ),
        ("Assistant", "$60,000", 'Information Technology' ),
        ("Assistant", "$5,000", 'Communications' );

-- add an employee
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe",).
        ("Information Technology"),
        ("Communications");



INSERT INTO book_prices (price)
VALUES (1),
       (2),
       (5),
       (10),
       (15);

INSERT INTO favorite_books (book_name, in_stock, book_price)
VALUES ("The Great Gatsby", true, 1),
       ("Huckleberry Finn", true, 3),
       ("100 Years of Solitude", false, 5),
       ("Things Fall Apart", false, 1),
       ("Crime and Punishment", true, 2),
       ("Moby Dick", true, 4),
       ("Decameron", false, 1);