class Square {
	constructor(col,row,color) {
		this.col = col;
		this.row = row;
		this.color = color;
		this.borderColor = '#303030';
		this._width = 20;
		this._height = 20;
	}

	draw() {
		canvas.drawSquare(this.col, this.row, this.color, "#303030");
	}

	static insertSquaresList(arraySquares) {
		arraySquares.map(square => {
			SquareController.arraySquares.push(square);
		});

		SquareController.arraySquares.sort(this._compareRow);
	}

	static _compareRow(a, b){
		return b.row - a.row;
	}
}