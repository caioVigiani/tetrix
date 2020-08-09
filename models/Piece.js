class Piece {

	constructor(type, color) {
		this._color = color;
		this._listCoords = listInitialPiece[type];
		this._arraySquares = this._returnSquaresCoords();
		this._rotation = 0;
		this._listRotationCoords = objectPieceRotation[type];

		PieceController.piece = this;
	}

	update() {
		if (this._canMoveDown() && !this._haveCollisionDown()) {
			this._moveDown();
		} else {
			Square.insertSquaresList(this._arraySquares);
			Piece.createPiece();
		}
	}

	static createPiece() {
		new Piece(Helper.returnRandomNumber(listInitialPiece.length-1), arrayColor[Helper.returnRandomNumber(arrayColor.length-1)]);
		
		let flag = false;
		PieceController.piece._arraySquares.map(squarePiece => {
			if(PieceController.piece._haveCollision(squarePiece)) flag = true;
		});

		if(flag)
			Game._gameOver();
	}

	_returnSquaresCoords() {
		let retorno = [];

		this._listCoords.map(coord => {
			let square = new Square(coord[0], coord[1], this._color);
			retorno.push(square);
		});

		return retorno;
	}

	verifyRotatePiece() {
		let arrayNewSquares = [];
		let nextIndexRotation = this._returnNextRotationPiece();
		let nextRotation = this._listRotationCoords[nextIndexRotation];
		this._arraySquares.map((square,index) => {
			let newCol = square.col + nextRotation[index][0];
			let newRow = square.row + nextRotation[index][1];
			arrayNewSquares.push(new Square(newCol,newRow,square.color));
		});

		let canRotate = true;

		arrayNewSquares.map(newSquare => {
			if(!this._canMove(newSquare) || this._haveCollision(newSquare)) canRotate = false;
		});

		if(canRotate){
			this._rotation = nextIndexRotation;
			this._arraySquares = arrayNewSquares;
		}
	}

	_returnNextRotationPiece() {
		let max = Object.keys(this._listRotationCoords).length;
		if (this._rotation == max-1) {
			return 0;
		} else { 
			return this._rotation + 1;
		}
	}

	_moveDown() {
		this._arraySquares.map(square => {
			square.row++;
		});
	}

	_canMoveDown() {
		let flag = true;
		this._arraySquares.map(square => {
			if(square.row >= GameScreen.rEnding) flag = false;
		});
		return flag;
	}

	_haveCollisionDown() {
		let flag = false;
		this._arraySquares.map(pieceSquares => {
			SquareController.arraySquares.map(square => {
				if(pieceSquares.row + 1 == square.row && pieceSquares.col == square.col) flag = true;
			});
		});
		return flag;
	}

	movePiece(arrayMov) {
		let newSquaresPiece = [];

		PieceController.piece._arraySquares.map(square => {
			newSquaresPiece.push(new Square(square.col+arrayMov[0], square.row+arrayMov[1], PieceController.piece._color));
		});

		let canMove = true;
		newSquaresPiece.map(newSquare => {
			if(!this._canMove(newSquare) || this._haveCollision(newSquare)) canMove = false;
		});

		if(canMove){
			PieceController.piece._arraySquares = newSquaresPiece;
		}
	}

	_canMove(newSquare) {
		return (
			newSquare.col >= GameScreen.cStarting && 
			newSquare.col <= GameScreen.cEnding &&
			newSquare.row >= GameScreen.rStarting &&
			newSquare.row <= GameScreen.rEnding
		)
	}

	_haveCollision(newSquare) {
		let flag = false;
		SquareController.arraySquares.map(square => {
			if(newSquare.col == square.col && newSquare.row == square.row) flag = true;
		});
		return flag;
	}
}