<script>
	import {fly} from 'svelte/transition'
	import { isOverlayOpen } from '../../../popup/Overlay';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="overlay" on:click={() => isOverlayOpen.set(false)} transition:fly>
	<div class="text">
		<p class="vnutri"><a href="/main-pr/profile">Профиль</a></p>
		<p class="vnutri"><a href=""><img src="/images/car.jpg" alt="car">
			<div class="text1">Бренды авто</div></a></p>
		<p class="vnutri"><a href=""><img src="/images/love.jpg" alt="love" />
			<div class="text1">Избранное</div></a></p>
		<p class="vnutri"><a href=""><img src="/images/what.png" alt="love" />
			<div class="text1">Мои объявления</div></a></p>
		<p class="vnutri"><a href="/">Вызод</a></p>
		<slot />
	</div>
</div>

<style>
	.overlay {
		height: 450px;
		display: flex;
		justify-content: flex-end;
		padding: 5px 0;
		position: absolute;
		right: 105px;
		top:70px;
	}
	.text {
		color: black;
		background-color: white;
		border-radius: 20px;
		padding: 10px 30px;
        border-color: black;
        border-width: 1px;
		width: 250px;
	}
    .vnutri{
        margin-top: 10px;
    }
    a{
        display: flex;
    }
    .text1{
        margin-left: 5px;
    }
	img{
		height: 20px;
		width: 20px;
		border-radius: 0%;
	}
</style>
