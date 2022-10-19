// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your README?",
    },
    {
      type: "input",
      name: "description",
      message: "Description for your README",
    },
    {
      type: "input",
      name: "installation",
      message: "Are there any installation instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "Usage information?",
    },
    {
      type: "input",
      name: "contribution",
      message: "Contribution guidelines?",
    },
    {
      type: "input",
      name: "tests",
      message: "Test instructions?.",
    },
    {
        type: "list",
        name: "license",
        message: "License?",
        choices: ['MIT', 'ISC', 'GNUPLv3', 'None'],
    }]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}))
  })
}

// Function call to initialize app
init();
