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
          return "You can not continue without typing a title";
        }
      },
    },
    {
      type: "input",
      name: "Description",
      message: "What would you like to put in the description?",
      //   validate: confirm,
    },
    {
      type: "checkbox",
      message: "Which technologies did you build it with?",
      name: "Built with",
      choices: [
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "Node.js",
        "React.js",
        "BootStrap",
        "MongoDB",
      ],
    },
    {
      type: "input",
      name: "Installation",
      message: "Please provide the installation",
    },
    {
      type: "input",
      name: "Contact me",
      message: "Please provide your contact details",
    },
  ])
  .then((data) => {
    fs.writeFile("README.md", JSON.stringify(data, null, "\t"), (error) => {
      error ? console.log(error) : console.log("success");
    });
  });
