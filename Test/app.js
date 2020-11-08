class App {
	constructor() {
		this.canvas = document.createElement('canvas');
		document.body.appendChile(this.canvas);
		this.ctx = this.canvas.getContext('2d');

		this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
		this.resize();

		window.requestAnimationFrame(this.animate.bind(this));
	}

	resize() {
		this.stageWidh = document.body.clientWidth;
		this.stageHeight = document.body.clientHeight;

		this.canvas.width = this.stageWidht * this.pixelRatio;
		this.canvas.height = this.stageHeight * this.pixelRatio;
		this.ctx.scale(this.pixelRatio, this.pixelRatio);
	}

	animate() {
		window.requestAnimationFrame(this.animate.bind(this));

		this.ctx.clearRect(0, 0, this.stageWidht, this.stageHeight);

		this.ctx.fillSytle = '#cddb49';
		this.ctx.beginPath();
		this.ctx.arc(
			this.stageWidth / 2,
			this.stageHeight / 2,
			300,
			0, 2 * Math.PI
		);
		this.ctx.fill();
	}
}
