const inquirer = require("inquirer");
const Svg = require("./lib/svg");
const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter only 3 characters:",
    validate: (input) => input.length <= 3,
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter color name or hexadecimal numbers:",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the color of the shape or hexadecimal numbers):",
  },
];

inquirer
  .prompt(questions)
  .then((response) => {
    let shape;
    if (response.shape === "circle") {
      shape = new Circle();
    } else if (response.shape === "triangle") {
      shape = new Triangle();
    } else {
      shape = new Square();
    }
    shape.setColor(response.shapeColor);
    const svg = new Svg();
    svg.setShape(shape);
    svg.setText(response.text, response.textColor);
    fs.writeFile(`examples/logo-${response.text}.svg`, svg.render(), (err) => {
      if (err) {
        console.error(`Error writing file: ${err.message}`);
        // Handle the error, e.g., throw err; or return
      }
      console.log("Your logo was created!!");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
