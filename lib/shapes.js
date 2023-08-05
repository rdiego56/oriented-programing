const CLI = require("./cli")

class Shape {
    constructor() {
        this.color= ""
    }
    setColor(color) {
        this.color = color
    }
}

class circle extends Shape {
    render() {
        return '<cricle cx="25" cy="75" r="20" fill="${this.color}"/>'
    }
}

class square extends Shape {
    render() {
        return `<cricle cx="25" cy="75" r="20" fill="${this.color}"/>`
    }
}

class trianle extends Shape {
    render() {
        return `<cricle cx="25" cy="75" r="20" fill="${this.color}"/>`
    }
}

module.exports = CLI