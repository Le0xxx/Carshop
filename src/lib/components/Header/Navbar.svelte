<script>
	import Button from '../Common/Button.svelte';
	function scrollToText() {
    const targetText = document.querySelector('#target-text');
    if (targetText) {
      const targetPosition = targetText.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
</script>

<div class="navbar">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="navbar_img"><h2>CARshop</h2></a>
		<a href="https://yandex.ru/maps/973/surgut/?ll=73.393029%2C61.241780&z=12" class="navbar_img">
			<img class="map" src="/icon/map.png" alt="" />Сургут</a
		>
		<button on:click={scrollToText} class="navbar_img">Партнерские дилеры</button>
		<a href="/search" class="navbar_img">Бренды авто</a>
		<div class="navbar_img">
			<a href="/signup"><Button>Вход</Button></a>
			<a href="/reg"><Button>Регистрация</Button></a>
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
	img {
		width: 20px;
		height: 20px;
		border-radius: 0%;
	}
</style>
