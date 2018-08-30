class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv() {
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.innerHTML = 'Тут был я!';
		div.style.cssText = `height: ${this.height}px !important; 
								   width: ${this.width}px !important; 
								   background-color: ${this.bg}; 
								   font-size: ${this.fontSize}px; 
								   text-align: ${this.textAlign};` 
	}
}

const elem = new options('150', '250', 'green', '25', 'center');

document.write(elem.createDiv());