<script lang="ts">
    import type {Cars} from '$lib/database/cars';
    export let car:Cars;
</script>
<div class="blocks_item {car.mark}">
<div>
    <img  class="car-card" src="{car.photo1}" alt="">
</div>
<div class="mx-4 mt-1">{car.mark} {car.name}, {car.years}</div>
<div class="mx-4 mt-1">{car.price}</div>
<div class="mx-3 mt-1"><img class="map" src="/icon/map.png" alt="">Сургут</div>
</div>
<style lang="scss">
    .car-card{
        background-size: cover;
        border-top-left-radius: 30px;
		border-top-right-radius:30px;
    }
    .block_item{
        height: 330px;
        width: 300px;
        background-color: white;
        border-radius: 30px;
        color:black;
        margin-left: 15px;
        margin-bottom: 30px;
        @media (max-width: 1024px){
            width: 400px;
            height: 380px;
        }
    }
    .map{
		float:left;
        width: 19px;
        height: 18px;
        margin-top: 2px;
	}
    img{
        height: 220px;
        width: 300px;
        border-radius: 0%;
        @media (max-width: 1024px){
            width: 400px;
            height: 270px;
        }
    }
</style>