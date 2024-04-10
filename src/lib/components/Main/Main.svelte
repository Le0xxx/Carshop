<script>
	// @ts-nocheck

	import CarCard from '../Cars/CarCard.svelte';
	import Diler from '../Dilers/DCDiler.svelte';
	import { dilers } from '$lib/database/cars';
	import { cars } from '$lib/database/cars';
</script>

<div class="films">
	<div class="container mx-auto">
		<header class="header">
			<h1 class="text_img">Работаем более<br /> чем с 1000 дилерами<br /> по всей России</h1>
		</header>
	</div>
	<div class="container mx-auto">
		<div class="text">
			<h1>Найди свой идеальный автомобиль</h1>
			<td width="10%">
				<h2 class="mark"><button>Acura</button></h2>
				<h2 class="mark"><button>Audi</button></h2>
				<h2 class="mark"><button>Bently</button></h2>
				<h2 class="mark"><button>BMW</button></h2>
				<h2 class="mark"><button>Bugatti</button></h2>
			</td>
			<td width="10%">
				<h2 class="mark"><button>Cadillac</button></h2>
				<h2 class="mark"><button>Cherry</button></h2>
				<h2 class="mark"><button>Chevrolet</button></h2>
				<h2 class="mark"><button>Citroen</button></h2>
				<h2 class="mark"><button>Dodge</button></h2>
			</td>
			<td width="10%">
				<h2 class="mark"><button>Ferrari</button></h2>
				<h2 class="mark"><button>Ford</button></h2>
				<h2 class="mark"><button>Hawal</button></h2>
				<h2 class="mark"><button>Honda</button></h2>
				<h2 class="mark"><button>Показать всё</button></h2>
			</td>
		</div>
	</div>
	<div class="container mx-auto">
		<h1 class="text">Лучшая цена</h1>
		<div class="car_grid">
			{#each cars as car}
				<CarCard {car} />
			{/each}
		</div>
	</div>
	<div class="container mx-auto">
		<h1 class="text">Посетите наший дилеров</h1>
		<div class="diler_grid">
			{#each dilers as diler}
				<Diler {diler} />
			{/each}
		</div>
	</div>
	<div class="container mx-auto">
		<h1 class="text">Почему вы должны покупать у нас</h1>
		<div class="flex gap-5 justify-between">
			<div class="why">
				<div class="txt">
					<img class="mb-2 mx-3" src="/icon/star.png" alt="" />
					<h2>
						<p class="mb-2">Награды</p>
					</h2>
					<p class="text_diler">
						Наш сайт неоднократно оценивалась лучшим сайтом по подбору автомобилей
					</p>
				</div>
			</div>
			<div class="why">
				<div class="txt">
					<img class="mb-2 mx-3" src="/icon/track.png" alt="" />
					<h2>
						<p class="mb-2">Доставка</p>
					</h2>
					<p class="text_diler">
						доставим вам ваш автомобиль прямо до дома, в удобное для вас время
					</p>
				</div>
			</div>
			<div class="why">
				<div class="txt">
					<img class="mb-2 mx-3" src="/icon/shield.png" alt="" />
					<h2>
						<p class="mb-2">Возврат</p>
					</h2>
					<p class="text_diler">
						в случае если вам автомобиль не понравился или он вам не подходит, вы можете вернуть в
						течение 2 недель его нам
					</p>
				</div>
			</div>
			<div class="why">
				<div class="txt">
					<img class="mb-2 mx-3" src="/icon/fist.png" alt="" />
					<h2>
						<p class="mb-2">Страховка</p>
					</h2>
					<p class="text_diler">
						подберем для вас самый выгодный способ страхования, чтобы вы ничего не переплачивали
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.films {
		background: grey;
		color: white;
		padding: 50px 0;
		border-top: 1px solid var(--light);
		height: 100%;
	}

	.text_img {
		margin-left: 100px;
		margin-top: 200px;
		position: absolute;
	}
	.mark {
		margin-bottom: 10px;
	}
	.text {
		color: black;
		margin-left: 30px;
		margin-bottom: 15px;
		margin-top: 15px;
	}
	.car_grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 40px;
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
	.diler_grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		@media (max-width: theme('screens.desktop')) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: theme('screens.laptop')) {
			grid-template-columns: repeat(1, 1fr);
		}
		@media (max-width: theme('screens.tablet')) {
			grid-template-columns: 1fr;
		}
	}
	.why {
		width: 330px;
		height: 400px;
		background-color: white;
		border-radius: 30px;
		color: black;

		@media (max-width: theme('screens.laptop')) {
			width: 180px;
		}
		@media (max-width: theme('screens.tablet')) {
			width: 140px;
		}
	}
	.txt {
		margin-left: 20px;
		margin-top: 20px;
		@media (max-width: theme('screens.desktop')) {
			h2 {
				font-size: 22px;
				font-weight: 700;
				margin-right: 10px;
			}
		}
		@media (max-width: theme('screens.laptop')) {
			h2 {
				font-size: 16px;
				font-weight: 700;
				margin-right: 10px;
			}
		}
		@media (max-width: theme('screens.tablet')) {
			h2 {
				font-size: 15px;
				font-weight: 700;
				margin-right: 10px;
			}
		}
	}
	.header {
		position: relative;
		background-image: url('car_main.png');
		height: 600px;
		background-repeat: round;
	}
	.text_diler {
		font-size: 26px;
		margin-right: 20px;
	}
</style>
