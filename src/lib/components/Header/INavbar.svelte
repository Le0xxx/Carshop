<script>
	import OverlayOpen from '../Overlay/OverlayOpen.svelte';
	let isOpen = false;
	let scrollToPosition = 1890;

	function handleClick() {
		window.scrollTo(0, scrollToPosition);
	}
</script>

<div class="navbar">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="navbar_img"><h2>CARshop</h2></a>
		<a href="https://yandex.ru/maps/973/surgut/?ll=73.393029%2C61.241780&z=12" class="navbar_img">
			<img class="map" src="/icon/map.png" alt="" />Сургут</a>
		<button on:click={handleClick} class="navbar_img">Партнерские дилеры</button>
		<a href="/search" class="navbar_img">Бренды авто</a>
		<div class="izb">
			<a href=""><img class="ml-7" src="/images/love.jpg" alt="love" />
				<div class="text">Избранное</div>
			</a>
		</div>
		<div class="izb">
			<a href=""><img class="ml-12" src="/images/what.png" alt="love" />
				<div class="text">Мои объявления</div>
			</a>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<img class="avatar" src="/images/avatar.jpg" alt="avatar" on:click={() => (isOpen = !isOpen)} />
		{#if isOpen}
			<OverlayOpen />
		{/if}
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
		display: flex;
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
		padding: 13px 0;
		max-width: 1855px;
	}
	.map {
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
	img {
		width: 20px;
		height: 20px;
		border-radius: 0%;
	}
</style>
