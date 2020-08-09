var canvas = new Canvas("#myCanvas");

var timerSec;
var timerFrame;

window.addEventListener('keydown',this.playerMovement,false);

function playerMovement(e) {
	if (e.keyCode == 37) {
		PieceController.piece.movePiece([-1,0]);
	}
	if (e.keyCode == 38) {
		PieceController.piece.verifyRotatePiece();
	}
	if (e.keyCode == 39) {
		PieceController.piece.movePiece([1,0]);
	}
	if (e.keyCode == 40) {
		PieceController.piece.movePiece([0,1]);
	}
}

const _drawBlankScreen = () => {
	for(let row = 0; row <= 19; row++) {
		for(let col = 0; col <= 9; col++) {
			canvas.drawSquare(col, row, '#FFFFFF', '#F4F4F4');
		}
	}
}

const draw = () => {
	_drawBlankScreen();
	SquareController.draw();
	PieceController.draw();
}

const update = () => {
	Game.verifyLine();
}

const secUpdate = () => {
	PieceController.update();
}

const secFrame = () => {
	update();
	draw();
}

(() => {
	Piece.createPiece();
	timerSec = setInterval(secUpdate, 800);
	timerFrame = setInterval(secFrame, 16);
})();