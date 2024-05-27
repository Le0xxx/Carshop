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
      <div class="button_radius-colour">
        <button  on:click={() => prevImage()}><div class="arr left"></div></button>
      </div>

      <div class="button_radius-colour">
        <button  on:click={() => nextImage()}><div class="arr right"></div></button>
      </div>
    </div>
  </div>
  <style> 
    img{
        border-radius: 30px;
        width: 680px;
        height: 500px;
    }
    .carousel-buttons{
      width: 650px;
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-left: 14px;
      bottom: 260px;
    }
    .right{
        height: 22px;
        width: 22px;
        border-top: 4px solid rgb(194, 189, 189);
        border-left: 4px solid rgb(194, 189, 189);
        transform: rotate(135deg); 
        
    }
    .left{
        height: 22px;
        width: 22px;
        border-top: 4px solid rgb(194, 189, 189);
        border-left: 4px solid rgb(194, 189, 189);
        transform: rotate(-45deg);
    }
    .button_radius-colour{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 46px;
        border-radius: 20px;
    }
  </style>