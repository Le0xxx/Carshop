<script lang="ts">
	let city = '';
    import Auto from '../BestAuto/Auto.svelte';
    import { cars } from '$lib/database/cars';
</script>

<div class="back">
	<div class="zadnik mx-auto">
		<div class="text">
			<h1 class="ml-4">Найди свой идеальный автомобиль</h1>
			<td width="570px">
				<h2 class="mark"><button>Acura</button></h2>
				<h2 class="mark"><button>Audi</button></h2>
				<h2 class="mark"><button>Bently</button></h2>
				<h2 class="mark"><button>BMW</button></h2>
				<h2 class="mark"><button>Bugatti</button></h2>
			</td>
			<td width="500px">
				<h2 class="mark"><button>Cadillac</button></h2>
				<h2 class="mark"><button>Cherry</button></h2>
				<h2 class="mark"><button>Chevrolet</button></h2>
				<h2 class="mark"><button>Citroen</button></h2>
				<h2 class="mark"><button>Dodge</button></h2>
			</td>
			<td width="200px">
				<h2 class="mark"><button>Ferrari</button></h2>
				<h2 class="mark"><button>Ford</button></h2>
				<h2 class="mark"><button>Hawal</button></h2>
				<h2 class="mark"><button>Honda</button></h2>
				<h2 class="mark"><button>Показать всё</button></h2>
			</td>
			<h1 class="ml-4">Фильтры</h1>
		</div>
	</div>
	<div class="blok mx-auto">
		<td>
			<input type="text" id="city" bind:value={city} placeholder="Марка" required />
			<input type="text" id="city" bind:value={city} placeholder="Год от" required />
			<input type="text" id="city" bind:value={city} placeholder="Цена от" required />
			<input type="text" id="city" bind:value={city} placeholder="Двигатель" required />
		</td>
		<td>
			<input type="text" id="city" bind:value={city} placeholder="Цвет" required />
			<input type="text" id="city" bind:value={city} placeholder="Привод" required />
			<input type="text" id="city" bind:value={city} placeholder="Руль" required />
			<input type="text" id="city" bind:value={city} placeholder="Модель" required />
		</td>
		<td>
			<input type="text" id="city" bind:value={city} placeholder="Пробег от" required />
			<input type="text" id="city" bind:value={city} placeholder="Мощность" required />
			<input type="text" id="city" bind:value={city} placeholder="Комплектация" required />
		</td>
	</div>
	<div class="changes mx-auto"><div class="mx-auto text-lg">Поиск</div></div>
	<div class="block2 mx-auto">
		<div class="text">
			<h1 class="ml-9">Результат</h1>
		</div>
        <div class="car_grid">
			{#each cars as car}
				<Auto {car} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.mark {
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
		height: 370px;
		width: 1270px;
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
	}
	.changes {
		display: flex;
		height: 40px;
		width: 220px;
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
