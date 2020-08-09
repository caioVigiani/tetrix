var listInitialPiece = [
	[[5,0],[5,1],[5,2],[5,3]],
	[[5,0],[4,1],[5,1],[6,1]],
	[[4,0],[4,1],[5,1],[6,1]],
	[[6,0],[4,1],[5,1],[6,1]],
	[[4,0],[5,0],[5,1],[6,1]],
	[[4,0],[5,0],[3,1],[4,1]],
	[[5,0],[6,0],[5,1],[6,1]],
]

var objectPieceRotation = {
	"0": {
		"0": [[-2,-2],[-1,-1],[0,0],[1,1]],
		"1": [[-2,2],[-1,1],[0,0],[1,-1]],
		"2": [[2,2],[1,1],[0,0],[-1,-1]],
		"3": [[2,-2],[1,-1],[0,0],[-1,1]]
	},
	"1": {
		"0": [[1,-1],[-1,-1],[0,0],[1,1]],
		"1": [[1,1],[1,-1],[0,0],[-1,1]],
		"2": [[-1,1],[1,1],[0,0],[-1,-1]],
		"3": [[-1,-1],[-1,1],[0,0],[1,-1]]
	},
	"2": {
		"0": [[0,-2],[-1,-1],[0,0],[1,1]],
		"1": [[2,0],[1,-1],[0,0],[-1,1]],
		"2": [[0,2],[1,1],[0,0],[-1,-1]],
		"3": [[-2,0],[-1,1],[0,0],[1,-1]],
	},
	"3": {
		"0": [[2,0],[-1,-1],[0,0],[1,1]],
		"1": [[0,2],[1,-1],[0,0],[-1,1]],
		"2": [[-2,0],[1,1],[0,0],[-1,-1]],
		"3": [[0,-2],[-1,1],[0,0],[1,-1]]
	},
	"4": {
		"0": [[0,-2],[1,-1],[0,0],[1,1]],
		"1": [[2,0],[1,1],[0,0],[-1,1]],
		"2": [[0,2],[-1,1],[0,0],[-1,-1]],
		"3": [[-2,0],[-1,-1],[0,0],[1,-1]]
	},
	"5": {
		"0": [[1,-1],[2,0],[-1,-1],[0,0]],
		"1": [[1,1],[0,2],[1,-1],[0,0]],
		"2": [[-1,1],[-2,0],[1,1],[0,0]],
		"3": [[-1,-1],[0,-2],[-1,1],[0,0]],
	},
	"6": {
		"0": [[-1,0],[0,-1],[0,1],[1,0]],
		"1": [[0,1],[-1,0],[1,0],[0,-1]],
		"2": [[1,0],[0,1],[0,-1],[-1,0]],
		"3": [[0,-1],[1,0],[-1,0],[0,1]]
	},
}

var arrayColor = ['red','green','yellow','blue','orange','pink','purple'];