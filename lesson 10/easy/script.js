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
        divBox.textContent = 'Новый DIV';
        divBox.style.height = this.height + 'px';
        divBox.style.width = this.width + 'px';
        divBox.style.background = this.bg;
        divBox.style.fontSize = this.fontSize + 'px';
        divBox.style.textAlign = this.textAlign;
        document.body.appendChild(divBox);
    }
}

const textDiv = new Options(600, 500, 'red', 30, 'centre');

textDiv.showDiv();