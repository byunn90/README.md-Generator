const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the project title name?",
      validate: (a) => {
        if (a) {
          return true;
        } else {
          return "Must type something in to continue";
        }
      },
    },
    {
      type: "input",
      name: "name",
      message: "Would you like to enter a description?",
      validate: (a) => {
        if (a) {
          return true;
        } else {
          return;
        }
      },
    },
    {
      type: "checkbox",
      message: "What technologies did you use?",
      name: "stack",
      choices: ["HTML", "CSS", "JavaScript", "MySQL"],
    },
  ])
  .then((data) => {
    console.log(data);
    fs.writeFile("README.md", JSON.stringify(data, null, "\t"), (error) => {
      error ? console.log(error) : console.log("success");
    });
  });
