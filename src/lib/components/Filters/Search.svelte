<script lang="ts">
	let mark = '';
	let years = '';
	import Auto from '../BestAuto/Auto.svelte';
	import { cars } from '$lib/database/cars';
</script>


<div class="back">
	<div class="zadnik mx-auto">
		<h1 class="ml-4">Найди свой идеальный автомобиль</h1>
		<div class="list">
			<botton class="list_item active" data-id="all">Все марки</botton>
			<botton class="list_item" data-id="Volkswagen">Volkswagen</botton>
			<botton class="list_item" data-id="Toyota">Toyota</bottob>
			<botton class="list_item" data-id="Nissan">Nissan</botton>
			<botton class="list_item" data-id="Lexus">Lexus</botton>
			<botton class="list_item" data-id="Opel">Opel</botton>
			<botton class="list_item" data-id="Changan">Changan</botton>
			<botton class="list_item" data-id="Kia">Kia</botton>
			<botton class="list_item" data-id="Лада">Лада</botton>
			<botton class="list_item" data-id="Mitsubishi">Mitsubishi</botton>
		</div>
	</div>
	<div class="block2 mx-auto">
		<div class="text">
			<h1 class="ml-9">Результат</h1>
		</div>
		<div class="car_grid">
			{#each cars as car}
				<a href="/car-{car.id}"><Auto {car} /></a>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.field{
		width: 410px;
	}
	.list_item {
		margin-bottom: 10px;
	}
	.text {
		margin-bottom: 15px;
		margin-top: 15px;
	}
	.back {
		padding: 35px 0;
		min-height: 899px;
	}
	.blok {
		height: 130px;
		width: 1230px;
		background-color: white;
		border-radius: 30px;
	}
	.zadnik {
		width: 1270px;
	}
	input[type='text'] {
		height: 45px;
		width: 370px;
		padding: 15px;
		border: 1px solid #080808;
		border-radius: 30px;
		box-sizing: border-box;
		margin-bottom: 5px;
		margin-top: 30px;
		margin-left: 20px;
		margin-right: 10px;
	}
	.changes {
		display: flex;
		height: 40px;
		width: 180px;
		background-color: rgb(194, 7, 7);
		align-items: center;
		border-radius: 30px;
		font-size: 15px;
		color: white;
		position: relative;
		margin-top: -20px;
	}
	.block2 {
		width: 1300px;
	}
	.car_grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		@media (max-width: theme('screens.desktop')) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media (max-width: theme('screens.laptop')) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: theme('screens.tablet')) {
			grid-template-columns: 1fr;
		}
	}
</style>
