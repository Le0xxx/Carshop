<script lang="ts">
    export let images: string | any[] = [];
    let currentImageIndex = 0;
  
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }
  
    function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
  </script>
  
  <div class="carousel">
    {#each images as image, index}
      {#if index === currentImageIndex}
        <img src={image.src} alt={image.alt} />
      {/if}
    {/each}
    <div class="carousel-buttons">
      <button  on:click={() => prevImage()}><div class="arr left"></div></button>
      <button  on:click={() => nextImage()}><div class="arr right"></div></button>
    </div>
  </div>
  <style>
    img{
        border-radius: 30px;
        width: 680px;
        height: 500px;
    }
    .carousel-buttons{
        width: 660px;
        position: absolute;
        display: flex;
        justify-content: space-between;
        margin-left: 10px;
        margin-right: 10px;
        bottom: 545px;
    }
    .right{
        height: 18px;
        width: 18px;
        border-top: 3px solid #c4c1c1;
        border-left: 3px solid #c4c1c1;
        transform: rotate(135deg); 
    }
    .left{
        height: 18px;
        width: 18px;
        border-top: 3px solid #c4c1c1;
        border-left: 3px solid #c4c1c1;
        transform: rotate(-45deg);
    }
  </style>