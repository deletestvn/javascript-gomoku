class Chess {
	ctx;
	color;

	constructor(ctx) {
		this.ctx = ctx;
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.arc(1 / 2 + this.x, 1 / 2 + this.y, 3 / 8, 0, 2 * Math.PI);
		this.ctx.closePath();
		this.ctx.fill();
	}

	erase() {

	}

	place(p) {
		this.x = p.x;
		this.y = p.y;

		this.draw();
	}
}