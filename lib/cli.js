const { wrtieFile } = require('fs/promises');
const inquirer= require('inquire');
const { Circle, Triangle, Square} = require("./shapes.js")


function CLI () {
inquirer.prompt([
{
    type: "list",
    name: "shapeType",
    message: "select a shape",
    choices: ["cricle", "triangle", "square"]
},
{
    type: "input",
    name: "shapeColor",
    message: " What color is the shape?",
},
{
    type: "input",
    name: "text",
    message: "What is the text (must be no more than 3 characters)"
},
{
    type: "input",
    name: "textcolor",
    message: "What is the color of the shape?"
}
]).then(({shapeType, shapeColor, text, textColor}) => {
    let newShape;
    switch(shapeType) {
        case "circle":
            newShape = new Circle();
            break;
        case "square":
            newShape = new Square();
            break;
        case "triangle":
            newShape = new Triangle();
            break;
    }
    newShape.setColor(shapeColor)
}

)}

function generateSVG() {
    return
}

module.exports = CLI