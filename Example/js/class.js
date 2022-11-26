"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

// наслідування класу Rectangle
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);    // наслідвані параметри класу Rectangle
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, колір: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Sums text on page', 'red');
div.showMyProps();
console.log(`Площа: ${div.calcArea()}`);

const square = new Rectangle(10, 10);   // екземпляр
console.log(square.calcArea());
