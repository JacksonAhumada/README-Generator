// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
        choices: ['MIT', 'ISC', 'GNUPLv3'],
    }]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
