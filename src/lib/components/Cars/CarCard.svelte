<script lang="ts">

	export let car;
	let image1 = car.photo1;
	let image2 = car.photo2;
	let image3 = car.photo3;
	let image4 = car.photo4;

	import Carousel from '../Common/Carousel.svelte';
	let images = [
		{src: image1, alt: 'Image 1'},
		{src: image2, alt: 'Image 2'},
		{src: image3, alt: 'Image 3'},
		{src: image4, alt: 'Image 4'},
	];

</script>

<div class="back">
	<div class="leviy_con ml-auto">
		<div class="info font-semibold font-size ml-12 mt-5 ">{car.name}</div>
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
					<span class="info font-semibold">{car.HP}</span>
					<span class="info font-semibold">{car.covdist}</span>
					<span class="info font-semibold">{car.body}</span>
					<span class="info font-semibold">{car.colour}</span>
					<span class="info font-semibold">{car.wheel}</span>
					<span class="info font-semibold">{car.cequipment}</span>
					<span class="info font-semibold">{car.transmission}</span>
					<span class="info font-semibold">{car.engine}</span>
					<span class="info font-semibold mt-9">{car.price}</span>
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
	.photo {
		width: 680px;
		height: 400px;
	}

</style>
