const fs = require('fs');
const inquirer = require('inquirer');
const generateSvg = require('./utils/generateSvg');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the text:',
    validate: (input) => input.length <= 3, 
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal):',
  },
];

const createSVG = (fileName, data) => {
  const template = generateSvg(data);
  fs.writeFile(fileName, template, (err) => {
    err ? console.error(err) : console.log('Generated logo.svg');
  });
};

const init = () => {
  inquirer.prompt(questions).then((data) => {
    createSVG('./output/logo.svg', data);
  });
};

init();
