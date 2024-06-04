<script lang="ts">
	let selectedMark = '';
  	let filteredCars = [];
	import Auto from '../BestAuto/Auto.svelte';
	import { cars } from '$lib/database/cars';
	function filterCars(mark) {
    	if (mark === 'all') {
      		filteredCars = cars;
    	} else {
      		filteredCars = cars.filter(car => car.mark === mark);
    	}
  }

	  function handleClick(event) {
	    const mark = event.target.dataset.id;
	    selectedMark = mark;
	    filterCars(mark);
	  }
</script>

<div class="back">
  <div class="zadnik mx-auto">
    <h1 class="ml-4">Найди свой идеальный автомобиль</h1>
    <div class="list">
      <h2 class="list_item active" data-id="all" on:click={handleClick}>Все марки</h2>
      <h2 class="list_item" data-id="Volkswagen" on:click={handleClick}>Volkswagen</h2>
      <h2 class="list_item" data-id="Toyota" on:click={handleClick}>Toyota</h2>
      <h2 class="list_item" data-id="Nissan" on:click={handleClick}>Nissan</h2>
      <h2 class="list_item" data-id="Lexus" on:click={handleClick}>Lexus</h2>
      <h2 class="list_item" data-id="Opel" on:click={handleClick}>Opel</h2>
      <h2 class="list_item" data-id="Changan" on:click={handleClick}>Changan</h2>
      <h2 class="list_item" data-id="Kia" on:click={handleClick}>Kia</h2>
      <h2 class="list_item" data-id="Лада" on:click={handleClick}>Лада</h2>
      <h2 class="list_item" data-id="Mitsubishi" on:click={handleClick}>Mitsubishi</h2>
		</div>
	</div>
	<div class="block2 mx-auto">
		<div class="text">
			<h1 class="ml-9">Результат</h1>
		</div>
		<div class="car_grid">
			{#each filteredCars as car}
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
