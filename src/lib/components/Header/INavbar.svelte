<script>
	// @ts-nocheck

	import { isOverlayOpen } from '../../../popup/Overlay';
</script>

<div class="navbar">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="navbar_img"><h2>CARshop</h2></a>
		<a href="https://yandex.ru/maps/973/surgut/?ll=73.393029%2C61.241780&z=12" class="navbar_img">
			<img class="map" src="/icon/map.png" alt="" />Сургут</a
		>
		<a href="/" class="navbar_img">Партнерские дилеры</a>
		<a href="/" class="navbar_img">Бренды авто</a>
		<div class="izb">
			<a href=""><img class="w-5 h-5 ml-7" src="/images/love.jpg" alt="love" />
			<div class="text">Избранное</div></a>
		</div>
		<div class="izb">
			<a href=""><img class="w-5 h-5 ml-12" src="/images/what.png" alt="love" />
			<div class="text">Мои объявления</div></a>
		</div>
		<a href="" on:click={() => {isOverlayOpen.set(true);}}>
			<img class="avatar" src="/images/avatar.jpg" alt="avatar" /></a>
	</div>
</div>

<style lang="scss">
	.navbar_img {
		color: black;
		text-align: center;
		font-size: 28px;
		font-weight: 700;
		line-height: normal;
		padding: 5px 0;
		@media (max-width: theme('screens.desktop')) {
			font-size: 20px;
			font-weight: 500;
		}
		@media (max-width: theme('screens.laptop')) {
			font-size: 20px;
			padding: 10px 5px;
			float: left;
		}
		@media (max-width: theme('screens.tablet')) {
			font-size: 20px;
		}
	}
	.navbar {
		padding: 10px 0;
		max-width: 1855px;
	}
	.map {
		float: left;
		margin: 5px 2px;
	}
	@media (max-width: theme('screens.laptop')) {
		.container {
			max-width: 900px;
		}
	}
	.avatar {
		width: 44px;
		height: 44px;
		border-radius: 50%;
	}
	.izb {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 3px;
	}
	.text {
		font-size: 15px;
	}
</style>
