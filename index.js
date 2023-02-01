const inquirer = require("inquirer");
const fs = require("fs");
// Issues
// Cant get them to write the file name
// wanna create spaces in the readme file when selected choices are selected.
const readMeGeneratorFile = ({
  projectTitle,
  userName,
  description,
  technologiesUsed,
  Installation,
  contactMe,
  github,
  email,
}) =>
  `
  # 🏆 ${projectTitle}

  ## Description

  ${description}

 ## Table of Contents 
* [Installation](#Installation)
* [Usage](#usage)
* [technologiesUsed](#technologies-Used)
* [tests](#Tests)
* [contactMe](#Contact-Me)

  # Technologies-Used:

  ${technologiesUsed.map((data) => data).join("\n")}

  # Installation:

  ${Installation}
  
  # Contact-Details
   💾 https://github.com/${github}\n
   📧 ${email}
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
    fs.writeFile(`readMe.md`, myReadmeFile, (error) => {
      error ? console.log(error) : console.log("success");
    });
  });
