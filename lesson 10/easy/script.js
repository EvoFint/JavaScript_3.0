class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    showDiv() {
        let divBox = document.createElement('div');
        divBox.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-aligin: ${this.textAlign};`
        divBox.textContent = 'Новый DIV';
        document.body.appendChild(divBox);
    }
}

const textDiv = new Options(600, 500, 'red', 40, 'centre');

textDiv.showDiv();