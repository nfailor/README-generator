// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/license/${license}/`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under the ${license} license. ${renderLicenseBadge(license)}
  This license link for this project is ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName} README.md
  |[GitHub License](https://img.shield.io/badge/${data.license}=blue)

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)

  - [Usage](#usage)

  - [Licensing](#license)

  - [Contribution](#contribution)

  - [Tests](#testing)

  - [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Licensing

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contribution}

  ## Tests

  To run tests, run the following command:

  ${data.testing}

  ## Questions

  If you have any questions about this repository, feel free to open an issue or contact me directly at ${data.email}.
  You can find more of my work at https://github.com/${data.username}

`;
}

module.exports = {
  generateMarkdown
}
