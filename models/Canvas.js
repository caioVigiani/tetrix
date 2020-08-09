class Canvas {
	constructor(selector) {
		this._c = document.getElementById("myCanvas");
		this._ctx = this._c.getContext("2d");
	}

	drawSquare(col, row, color, borderColor) {
		this._ctx.beginPath();
		this._ctx.lineWidth = "4";
		this._ctx.strokeStyle = borderColor;
		this._ctx.fillStyle = color;
		this._ctx.rect(col * 20, row * 20, 18, 18);
		this._ctx.stroke();
		this._ctx.fill();
	}
}