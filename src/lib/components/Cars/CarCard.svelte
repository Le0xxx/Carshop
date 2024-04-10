<script lang="ts">
    import type {Cars} from '$lib/database/cars';
    export let car:Cars;
</script>
<div class="containers">
<div>
    <img  class="car-card" src="{car.photo}" alt="">
</div>
<div class="mx-4 mt-3 font-semibold">{car.name}</div>
<div class="mx-4 mt-1">{car.price}</div>
<div class="mx-3 mt-1"><img class="map" src="/icon/map.png" alt="">Сургут</div>
</div>
<style>
    .car-card{
        height: 220px;
        width: 300px;
        background-size: cover;
        border-top-left-radius: 30px;
		border-top-right-radius:30px
    }
    .containers{
        height: 330px;
        width: 300px;
        background-color: white;
        border-radius: 30px;
        color:black;
        margin-left: 15px;
    }
    .map{
		float:left;
        width: 19px;
	}
</style>