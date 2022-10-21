// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  `Enter project name: `,
  `Enter description: `,
  `Enter Installation: `,
  `Enter Usage: `,
  `Enter License: `,
  `Enter Contributing:`,
  `Enter Tests: `,
  `Enter Github: `,
  `Enter EMAIL: `,
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, callback) {
  fs.writeFile("./output/README.md", data, callback);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      { type: "input", message: questions[0], name: "title" },
      { type: "input", message: questions[1], name: "description" },
      { type: "input", message: questions[2], name: "installation" },
      { type: "input", message: questions[3], name: "usage" },
      {
        type: "list",
        message: questions[4],
        name: "license",
        choices: ["Apache", "IBM", "GNU", "ISC", "MIT", "Mozilla", "Open"],
      },
      { type: "input", message: questions[5], name: "Contribution" },
      { type: "input", message: questions[6], name: "Tests" },
      { type: "input", message: questions[7], name: "username" },
      { type: "input", message: questions[8], name: "email" },
    ])
    .then((data) => {
      // console.log(data);
      writeToFile("./output/README.md", generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("Created!")
      );
    })
    .catch((error) => console.log(error));
}

// Function call to initialize app
init();
