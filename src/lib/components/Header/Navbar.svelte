<script>
	import DcButton from '../Common/DCButton.svelte';
</script>

<div class="navbar">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="navbar_img"><h2>CARshop</h2></a>
		<a href="https://yandex.ru/maps/973/surgut/?ll=73.393029%2C61.241780&z=12" class="navbar_img">
			<img class="map" src="/icon/map.png" alt="">Сургут</a>
		<a href="/" class="navbar_img">Партнерские дилеры</a>
		<a href="/" class="navbar_img">Бренды авто</a>
		<div><DcButton>Вход</DcButton>
		<DcButton>Регистрация</DcButton></div>
	</div>
</div>
<style lang="scss">
	.navbar_img {
		color: black;
		text-align: center;
		font-size: 28px;
		font-weight: 700;
		line-height: normal;
		@media (max-width: theme('screens.desktop')) {
			font-size: 20px;
			font-weight: 500;
		}
		@media (max-width: theme('screens.laptop')) {
			font-size: 20px;
			padding: 10px 10px;
			float:left;

		}
		@media (max-width: theme('screens.tablet')) {
			font-size: 20px;
		}
		
	}
	.navbar {
		padding: 10px 0;

	}
	.map{
		float:left;
		margin: 5px 2px;
	}
	
</style>
