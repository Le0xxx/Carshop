<div class="navbar">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="navbar_img"><h2>CARshop</h2></a>
		<a href="https://yandex.ru/maps/973/surgut/?ll=73.393029%2C61.241780&z=12" class="navbar_img">
			<img class="map" src="/icon/map.png" alt="" />Сургут</a
		>
		<a href="/" class="navbar_img">Партнерские дилеры</a>
		<a href="/" class="navbar_img">Бренды авто</a>
		<div class="izb">
			<a href=""><img class="w-5 h-5" src="/images/love.jpg" alt="love" /></a>
			<div class="text">Избранное</div>
		</div>
		<div class="izb">
			<a href=""><img class="w-5 h-5" src="/images/what.png" alt="love" /></a>
			<div class="text">Мои объявления</div>
		</div>
		<div id="ShowHide1">
			<a href=""><img class="avatar" src="/images/avatar.jpg" alt="avatar" /></a>
			<div id="exemple1">
				<p><a href="">Избранное</a></p>
				<p>Мои объявления</p>
				<p>Профиль</p>
				<p>Выход</p>
			</div>
		</div>
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
	#exemple1 {
  overflow: hidden;
  max-height: 0;
  background: gray;
  transition: max-height 0.5s;
  max-width: 44px;
}

#ShowHide1:hover #exemple1 {
  max-height: 100px;
  transition: max-height 2s;
}
</style>
