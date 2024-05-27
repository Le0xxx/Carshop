<script>
	import CarCard from "$lib/components/Cars/CarCard.svelte";
	import Headers from "$lib/components/Header/Headers.svelte";
	export let data;
	import Auto from '$lib/components/BestAuto/Auto.svelte';
	import { cars } from '$lib/database/cars';
</script>
<Headers/>
<CarCard car={data.car}/>
