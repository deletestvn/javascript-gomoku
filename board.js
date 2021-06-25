class Board {
	ctx;
	grid;
	chess;

	constructor(ctx) {
		this.ctx = ctx;
		this.init();
	}

	init() {
		this.ctx.canvas.width = SIZE * BLOCK_SIZE;
		this.ctx.canvas.height = SIZE * BLOCK_SIZE;

		this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
	}

	reset() {
		this.grid = this.getEmptyBoard();
	}

	draw() {
		this.ctx.lineWidth = 1 / BLOCK_SIZE;
		for(var i = 0; i < SIZE; i++) {
			this.ctx.moveTo(1 / 2 + i , 1 / 2);
            this.ctx.lineTo(1 / 2 + i , SIZE - 1 / 2);
            this.ctx.stroke();
            this.ctx.moveTo(1 / 2 , 1 / 2 + i);
            this.ctx.lineTo(SIZE - 1 / 2 , 1 / 2 + i);
            this.ctx.stroke();
		}
	}

	getEmptyBoard() {
		return Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
	}

	store() {

	}

	clear() {

	}

	hasFive(player) {
		// horizontal
		for(var i = 0; i < SIZE; i++)
	}
}