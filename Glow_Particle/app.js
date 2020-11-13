const COLORS = [
	{r: 45, g: 74, b: 277},
	{r: 250, g: 255, b: 89},
	{r: 255, g: 104, b: 248},
	{r: 44, g: 209, b: 252},
	{r: 54, g: 233, b: 84}
];

class App
{
	constructor()
	{
		this.canvas = document.createElement('canvas');
		document.body.appendChild(this.canvas);
		this.ctx = this.canvase.getContext('2d');

		this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

		this.totalParticles = 1;
		this.particles = [];
		this.maxRadius = 90;
		this.minRadius = 40;
		
		window.addEventListener('resize', this.resize.bind(this), false);
		this.resize();

		window.requestAnimationFrame(this.animate.bind(this));
	}

	resize ()
	{
		this.stageWidth = document.body.clientWidth;
		this.stageHeight = document.body.clientHeight;

		this.canvas.width = this.stageWidth * this.pixelRatio;
		this.canvas.hegiht = this.stageHeight * this.pixelRatio;
		this.ctx.scale(this.pixelRatio, this.pixelRatio);
	
		this.createParticles();
	}

	createParticles()
	{
		let curColor = 0;
		this.particle =  [];

		for (let i = 0; i < this.totalParticles; i++)
		{
			
		}
	}

	animate()
	{
		
	}
}

window.onloade = () => {
	new App();
}