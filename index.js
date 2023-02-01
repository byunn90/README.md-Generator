const inquirer = require("inquirer");
const fs = require("fs");

const readMeGeneratorFile = ({
  ProjectTitle,
  descriptionName,
  technologiesUsed,
  Installation,
  contactMe,
}) => `
  # ${ProjectTitle}

  ##${descriptionName}

  ## Technologies Used:

  ${technologiesUsed}

  ## Installation used:
 ${Installation}\n
  ## Contact Details
  
  ${contactMe}
`;

inquirer
  .prompt([
    {
      type: "input",
      name: "ProjectTitle",
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
      message: "Please provide the installation",
    },
    {
      type: "input",
      name: "contactMe",
      message: "Please provide your contact details",
    },
  ])
  .then((data) => {
    const myReadmeFile = readMeGeneratorFile(data);
    fs.writeFile("README.md", myReadmeFile, (error) => {
      error ? console.log(error) : console.log("success");
    });
  });
