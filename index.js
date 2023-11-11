// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const {generateMarkdown} = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please write about the use of your project',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GPL', 'ISC', 'APACHE2.0', 'LGPL', 'BSD', 'MPL', 'AGPL', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What command should be done to run tests?',
        name: 'testing'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repository?',
        name: 'contribution'
    },
];

inquirer.prompt(questions).then((responses) => {
    console.log(responses)

    writeToFile("generatedREADME.md", responses)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)

    fs.writeFile(fileName, generateMarkdown(data), (err) => (
        err ? console.error(err) : console.log('Successfully created README.md')
    ))
}