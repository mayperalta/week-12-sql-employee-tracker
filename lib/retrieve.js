const db = require('../server')

// retrieve all departments from db and display on terminal 
async function listDepartments(response) {
    let departmentList;
    let getValue = await db.promise().query (`SELECT * FROM department`)
        .then ((data) => {
        departmentList = data[0].map(data => {
            return {
                name: data.name,
                value: data.id
            }
        })
        return departmentList
    }).catch (err => {
        console.log(err); 
    })
    return getValue
}; 

// retrieve all roles from db and display on terminal 
async function listRoles(response) {
    let roleList;
    let getValue = await db.promise().query (`SELECT * FROM role`)
        .then ((data) => {
        roleList = data[0].map(data => {
            return {
                name: data.title,
                value: data.id
            }
        })
        return roleList
    }).catch (err => {
        console.log(err); 
    })
    return getValue
}; 

// retrieve all employees from db and display on terminal 
async function listEmployees(response) {
    let employeeList;
    let getValue = await db.promise().query (`SELECT * FROM employee`)
        .then ((data) => {
        employeeList = data[0].map(data => {
            return {
                name: data.first_name + ` ` + data.last_name,
                value: data.id
            }
        })
        return employeeList
    }).catch (err => {
        console.log(err); 
    })
    return getValue
}; 




module.exports = {listDepartments, listRoles, listEmployees}; 