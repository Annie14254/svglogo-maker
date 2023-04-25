const inquirer = require("inquirer");
const fs = require("fs")
const Triangle = require("./lib/shapes/Triangle")
const Square = require("./lib/shapes/Square")
const Circle  = require("./lib/shapes/Square")

// get information from user
const questions = [
    {
        type: "input",
        name: "initials",
        message: "What will the text for the logo be? (Max 3 characters)"
    },
    {
        type: "input",
        name: "textcolor",
        message: "What should the color of the text be?"
    },
    {
        type: "list",
        name: "shape",
        choices: ["circle", "square", "triangle"],
        message: "What will the shape of the logo be?"
    },
    {
        type: "input",
        name: "textcolor",
        message: "What should the shape's color be?"
    },
];

// make classes to get objects to do the work of generating stuff??
// generate svg file similar to the html from the activities or the md from the previous challenge


// depending on shape, make a new object out of the class
// pass into triangle() whatever you need to make it, e.g. the fill color
const newShape = new Triangle(color);
const svgCode = newShape.render(initials)

// write to file using above code

// can pass intials through render

// create new class for initials, etc.