const inquirer = require("inquirer");
const fs = require("fs");
// Issues
// Cant get them to write the file name
// wanna create spaces in the readme file when selected choices are selected.
const readMeGeneratorFile = ({
  projectTitle,
  badge,
  description,
  technologiesUsed,
  Installation,
  test,
  usage,
  contributers,
  github,
  lisence,
  linkdn,
  email,
}) =>
  `
# 🏆 ${projectTitle}
${
  badge === "Apache"
    ? "Apache" +
      "" +
      "<br>" +
      "" +
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    : badge === "MIT"
    ? "MIT" +
      "" +
      "<br>" +
      "" +
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    : badge === "IPL"
    ? "IPL" +
      "" +
      "<br>" +
      "" +
      "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    : badge ===
      "Perl" +
        "" +
        "<br>" +
        "" +
        "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
}

## Description

${description}

## Table of Contents 
* [Installation](#Installation)
* [Usage](#usage)
* [technologiesUsed](#technologies-Used)
* [tests](#Tests)
* [contactMe](#Contact-Me)

## Technologies-Used:

${technologiesUsed.map((data) => data).join("\n", "\n")}

## Installation:

${Installation}

## tests
${test}
  
## Usage
${usage}

## Lisence used:
  ${lisence}
## Contributing
${contributers}

## Contact-Details

💾 https://github.com/${github}
📧 ${email}

👷‍♀️  https://www.linkedin.com/in/${linkdn}-5423b4262/
`;

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
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
      type: "list",
      message: "Please select one of these licenses: ",
      name: "badge",
      choices: ["Apache", "IBM", "MIT", "Perl"],
    },
    {
      type: "list",
      message: "What lisence did you pick?: ",
      name: "lisence",
      choices: ["None", "Actionscript", "Ada", "Agda", "Android", "AppEngine"],
    },
    {
      type: "input",
      name: "description",
      message: "What would you like to put in the description?",
    },
    {
      type: "checkbox",
      message: "Which technologies did you build it with?",
      name: "technologiesUsed",
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
      message: "Please provide the installation procedures?",
    },
    {
      type: "input",
      name: "test",
      message: "What tests did you run for your application?",
    },
    {
      type: "input",
      name: "usage",
      message: "How would you use this application?",
    },
    {
      type: "input",
      name: "contributers",
      message:
        "Where there other developers who contributed to the your application?",
    },
    {
      type: "input",
      name: "linkdn",
      message:
        "Please provide your first and last name for your lindn e.g(kayhan-mamak)",
    },
    {
      type: "input",
      name: "github",
      message: "Please provide your github Username",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide your email",
    },
  ])

  .then((data) => {
    // const readMeFileName = data.readMeFileName;

    const myReadmeFile = readMeGeneratorFile(data);
    fs.writeFile(`./dist/readME.md`, myReadmeFile, (error) => {
      error ? console.log(error) : console.log("success");
    });
  });
