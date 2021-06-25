const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');

let board = new Board(ctx);
let chess = new Chess(ctx);
board.draw();

function addEventListener() {
	canvas.addEventListener("click", event => {
		let p = {x: Math.floor(event.offsetX / BLOCK_SIZE), y: Math.floor(event.offsetY / BLOCK_SIZE)};
		chess.place(p);
	});
}

addEventListener();