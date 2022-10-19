// TODO: Create a function that returns a license badge based on which license is passed in

const { default: inquirer } = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
   return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
 return "" 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") { 
    return `## License
This project is licensed under the ${license} license`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Content
  - [Project description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Tests](#Test)
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}
   
`;
}
  

module.exports = generateMarkdown;
