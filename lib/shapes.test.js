const jest = require("jest");
const init = require('../index');
const fs = require('fs');
const path = require('path');

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
    return data;
  }

  test('test init function', () => {
    // Define test input
    const answers = {
      text: 'RWG',
      textColor: 'white',
      shape: 'circle',
      shapeColor: 'blue'
    };
  
    // Define expected output
    const expectedOutput = `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="125" r="60" fill="blue" />
    <text x="100" y="135" font-size="30" text-anchor="middle" fill="white">RWG</text>
    </svg>
    `;
  
    // Call the init function and get the generated file content
    const fileName = 'logo.svg';
    const actualOutput = writeToFile(fileName, init(answers));
  
    // Read the generated file content
    const fileContent = fs.readFileSync(path.join(process.cwd(), fileName), 'utf8');
  
    // Compare actual and expected output
    expect(fileContent).toBe(expectedOutput);
  });
  