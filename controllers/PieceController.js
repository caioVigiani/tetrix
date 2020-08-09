class PieceController {
	// referência da peça ativa atualmente;
	// referência do objeto a ser desenhado e verificado (draw/update);
	static piece;

	constructor() {}

	static draw() {
		this.piece._arraySquares.map(square => {
			square.draw();
		});
	}

	static update() {
		this.piece.update();
	}
}