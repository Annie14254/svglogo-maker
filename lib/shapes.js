
// create classes for each shape
class Triangle {
    constructor(fillcolor, initials, textcolor){
        this.fillcolor = fillcolor;
        this.initials = initials
        this.textcolor = textcolor
    }
    
    // render contains the string to be written to the svg file
    render(fillcolor, initials, textcolor){
        return `<svg version = "1.1" width = "300" height = "200" xmlns="http://www.w3.org/2000/svg"><polygon points = "145, 15 239, 179 59, 179" fill = "${fillcolor}"></polygon><text x = "150" y = "150" font-size = "60" text-anchor = "middle" fill = "${textcolor}">${initials}</text></svg>`
    }
}


// repeat for square
class Square {
    constructor(fillcolor, initials, textcolor){
        this.fillcolor = fillcolor;
        this.initials = initials
        this.textcolor = textcolor
    }
    
    render(fillcolor, initials, textcolor){
        return `<svg version = "1.1" width = "300" height = "200" xmlns="http://www.w3.org/2000/svg"><rect x = "75" y = "35" width="150" height = "150" fill = "${fillcolor}"></rect><text x = "150" y = "150" font-size = "60" text-anchor = "middle" fill = "${textcolor}">${initials}</text></svg>`
    }
}

// repeat for circle
class Circle {
    constructor(fillcolor, initials, textcolor){
        this.fillcolor = fillcolor;
        this.initials = initials
        this.textcolor = textcolor
    }

    render(fillcolor, initials, textcolor){
        return `<svg version = "1.1" width = "300" height = "200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy = "120" r="80" fill = "${fillcolor}"></circle><text x = "150" y = "150" font-size = "60" text-anchor = "middle" fill = "${textcolor}">${initials}</text></svg>`
    }
}

// export to main file
module.exports = {Triangle, Square, Circle}
