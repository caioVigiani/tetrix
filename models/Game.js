class Game {
	static verifyLine() {
		for(let i = GameScreen.rEnding; i >= GameScreen.rStarting; i--){
			let countSquaresRow = 0;
			SquareController.arraySquares.map(square => {
				if(square.row == i) countSquaresRow++;
			});
			if(countSquaresRow == GameScreen.cEnding+1) {
				this._clearLine(i);
			}
		}
	}

	static _clearLine(row) {
		let newArraySquares = SquareController.arraySquares.filter(square => {
		    return square.row !== row;
		});
		SquareController.arraySquares = newArraySquares;
		this._dropAllAbove(row);
		this._addPoint();
	}

	static _dropAllAbove(rowCleared) {
		SquareController.arraySquares.map(square => {
			if(square.row < rowCleared){
				square.row++;
			}
		});
	}

	static _addPoint() {
		let newPoint = parseInt($("#pontosTetrix").text());
		$("#pontosTetrix").text(newPoint+1);
	}

	static _gameOver() {
		clearInterval(timerSec);
		clearInterval(timerFrame);
		$("#gameOverText").toggleClass("hide");
	}
}