<script>
	import Carousel from '../Common/Carousel.svelte';
	let images = [
		{ src: '/card/photo1.png', alt: 'Image 1' },
		{ src: '/card/photo2.png', alt: 'Image 2' },
		{ src: '/card/photo3.png', alt: 'Image 3' },
		{ src: '/card/photo4.png', alt: 'Image 4' }
	];
</script>

<div class="back">
	<div class="leviy_con ml-auto">
		<div class="info font-semibold ml-12 mt-4">BMW M5, 2019 год</div>
		<div class="photo mx-auto mt-3">
			<Carousel {images} />
		</div>
	</div>
	<div class="praviy_con mr-auto">
		<div class="phone mx-auto text-center mt-6 grid">Телефон диллера: +892239881723</div>
		<div class="font-semibold ml-7 mt-4 text-xl">Характеристика:</div>
		<div class="flex">
			<div class="block1">
				<div class="grid ml-7 gap-4 mt-3">
					<h3>Мощность:</h3>
					<h3>Пробег:</h3>
					<h3>Тип кузова:</h3>
					<h3>Цвет:</h3>
					<h3>Руль:</h3>
					<h3>Комплектация:</h3>
					<h3>Привод:</h3>
					<h3>Двигатель:</h3>
					<h2 class="mt-8 text-3xl">Цена:</h2>
				</div>
			</div>
			<div class="block2">
				<div class="grid ml-7 gap-4 mt-3">
					<span class="info font-semibold">845 л.с</span>
					<span class="info font-semibold">82223 км.</span>
					<span class="info font-semibold">седан</span>
					<span class="info font-semibold">синий</span>
					<span class="info font-semibold">левый</span>
					<span class="info font-semibold">4.4 AT M5 Competition</span>
					<span class="info font-semibold">4 WD</span>
					<span class="info font-semibold">бензин, 4.4 л</span>
					<span class="info font-semibold mt-9">9 999 999 руб</span>
				</div>
			</div>
		</div>
	</div>
</div>

<style tang="scss">
	.leviy_con {
		height: 580px;
		width: 730px;
		background-color: white;
		border-radius: 30px;
		margin-right: 25px;
	}
	.praviy_con {
		height: 580px;
		width: 500px;
		background-color: white;
		border-radius: 30px;
	}
	.back {
		padding: 35px 0;
		display: flex;
		min-height: 899px;
	}
	h3 {
		color: rgb(68, 66, 66);
		font-size: 20px;
	}
	h2 {
		color: rgb(68, 66, 66);
		font-weight: 100;
	}
	.block1 {
		height: 420px;
		width: 180px;
	}
	.block2 {
		height: 420px;
		width: 300px;
	}
	.phone {
		height: 40px;
		width: 400px;
		background-color: black;
		color: white;
		border-radius: 30px;
		align-items: center;
	}
	.info {
		font-size: 20px;
	}
	img {
		border-radius: 0;
	}
	.photo {
		width: 680px;
		height: 400px;
	}

</style>
