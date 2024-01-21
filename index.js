const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

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

function createSVGFile(text, textColor, shape, shapeColor) {
  const shapeInstance = getShapeInstance(shape);
  shapeInstance.setColor(shapeColor);

  const svgContent = shapeInstance.render();
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

function getShapeInstance(shape) {
  switch (shape.toLowerCase()) {
    case 'circle':
      return new Circle();
    case 'triangle':
      return new Triangle();
    case 'square':
      return new Square();
    default:
      throw new Error('Invalid shape');
  }
}

const init = () => {
  inquirer.prompt(questions).then((data) => {
    createSVGFile(data.text, data.textColor, data.shape, data.shapeColor);
  });
};

init();
