const inquirer = require("inquirer");
const fs = require("fs")
const {Triangle, Square, Circle} = require("./lib/shapes")

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
        message: "What should the color of the text be? Enter a color name or hexadecimal number."
    },
    {
        type: "list",
        name: "shape",
        choices: ["circle", "square", "triangle"],
        message: "What will the shape of the logo be?"
    },
    {
        type: "input",
        name: "fillcolor",
        message: "What should the shape's color be? Enter a color name or hexadecimal number."
    },
];



// depending on shape, make a new object out of the class
// pass into triangle() whatever you need to make it, e.g. the fill color
    // const newShape = new Triangle(color);
    // const svgCode = newShape.render(initials)

// write to file
function writeToFile(data) {

    var generatedShape

    if(data.shape == "circle"){

        generatedShape = new Circle(data.fillcolor, data.initials, data.textcolor)
        generatedShape = generatedShape.render(data.fillcolor, data.initials, data.textcolor)

    } else if (data.shape == "triangle"){

        generatedShape = new Triangle(data.fillcolor, data.initials, data.textcolor)
        generatedShape = generatedShape.render(data.fillcolor, data.initials, data.textcolor)

    } else if (data.shape == "square"){

        generatedShape = new Square(data.fillcolor, data.initials, data.textcolor)
        generatedShape = generatedShape.render(data.fillcolor, data.initials, data.textcolor)

    }

    fs.writeFile("./example_svgs/examplesvg.svg", generatedShape, (err) =>
        err ? console.error(err) : console.log('Logo generated!'))


}

// init function
function init(){
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        writeToFile(data)
    })
}

init();
