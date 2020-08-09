class SquareController {
	// lista de todos os quadrados no jogo;
	// referência do objeto com todos os elementos a serem desenhados e verificados (draw/update);
	static arraySquares = [];

	constructor() {}

	static draw() {
		this.arraySquares.map(square => {
			square.draw();
		});
	}
}