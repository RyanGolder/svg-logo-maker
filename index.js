const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');

const generateShape = require("./utils/generate-shape");

const shapeOptions = ["circle", "triangle", "square"];

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters for your logo e.g. RWG",
    validate: function(text) {
      if (text.length <= 3) {
        return true;
      }
      return "Please enter up to 3 characters only.";
    }
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color you'd like your text to be e.g. White, Black, or Blue",
  },
  {
    type: "list",
    name: "shape",
    message: "Please choose a shape from the below list.",
    choices: shapeOptions,
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color you'd like your shape to be.",
  },
];

// Function to write svg file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data)
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const svgLogoContent = generateShape(answers);
        writeToFile("logo.svg", svgLogoContent)
        console.log("Generated logo.svg!");
    })
}

// Function call to initialize app
init();

module.exports = init;