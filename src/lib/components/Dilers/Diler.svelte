<script lang="ts">
	import type { Diler } from '$lib/database/cars';

	export let diler: Diler;
</script>

<a href="{diler.url}" class="w-8/12">
<div class="car-card " style="background-image:url({diler.photo});">
	<div class="shadow">
		<div class="city">{diler.name}</div>
	</div>
</div>
</a>

<style lang="scss">
	.car-card {
		height: 260px;
		width: 460px;
		display: flex;
		align-items: flex-end;
		border-radius: 30px;
		background-size: contain ;
		background-repeat:round;
		@media (max-width: theme('screens.laptop')) {
			width: 350px;
		}
		
		
	}
	.city {
		margin-left: 20px;
		margin-top: 2px;

	}
	.shadow {
		background: rgba(61, 60, 60, 1);
		width: 460px;
		height: 30px;
		border-bottom-left-radius: 30px;
		border-bottom-right-radius:30px
	}
</style>
