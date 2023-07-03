const inquirer = require ('inquirer');
const questions = require ('./questions');
const userOptions = require('./userOptions');

// Create a function to initialize app
function selectOptions() {
    inquirer
    .prompt(questions)
    .then ((response) => {      
        userOptions(response); 
    })
  .catch (err => {
  console.log(err); 
  });
}

module.exports = selectOptions; 