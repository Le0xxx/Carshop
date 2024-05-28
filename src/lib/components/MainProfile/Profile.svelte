<script lang="ts">
	import Auto from '../BestAuto/Auto.svelte';
	import { cars } from '$lib/database/cars';
	let userInputs = {
		name: '',
		email: '',
		country: '',
		city: '',
		phone: ''
  };
	//let name = '';
	//let email = '';
	//let country = '';
	//let city = '';
	//let phone = '';
	import { onMount } from 'svelte';

	let fileUploader: HTMLInputElement | null = null;
	let imageGrid: HTMLElement | null = null;
	onMount(() => {
		fileUploader = document.getElementById('file-uploader') as HTMLInputElement;
		imageGrid = document.getElementById('image-grid');
	});

	function handleFileUpload(event: Event) {
		const target = event.target as HTMLInputElement;
		const files = target.files;

		if (window.FileReader && files && imageGrid) {
			const file = files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);

			reader.addEventListener('load', (event) => {
				if (imageGrid) {
					// Remove the existing image
					const existingImage = imageGrid.querySelector('img');
					if (existingImage) {
						imageGrid.removeChild(existingImage);
					}
					// Add the new image
					const img = document.createElement('img');
					imageGrid.appendChild(img);
					img.src = (event.target as any).result as string;
					img.alt = file.name;
					// Clear the input file
					target.value = '';
				}
			});
		}
	}
		function handleRemoveImage() {
    if (imageGrid && imageGrid.firstChild) {
      imageGrid.removeChild(imageGrid.firstChild);
    }
  }
  function saveUserData() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('userInputs', JSON.stringify(userInputs));
    }
  }

  function loadData() {
    if (typeof localStorage !== 'undefined') {
      const storedInputs = localStorage.getItem('userInputs');
      if (storedInputs) {
        userInputs = JSON.parse(storedInputs);
      }
    }
  }
  $: {
    if (typeof localStorage !== 'undefined') {
      saveUserData();
    }
  }
  loadData();
  let limitedCars = cars.slice(0, 6);
</script>

<body>
	<div class="max-w-5xl mx-auto">
		<div class="main mx-auto">
			<div class="block">
				<div class="field mx-auto" id="image-grid" />
				<label class="label mx-auto" for="file-uploader">
					<div class="mx-auto">
						<img class="photo" src="\images\photo.png" alt="" />Загрузить фото
					</div></label
				>
				<input
					type="file"
					id="file-uploader"
					accept="image/*"
					bind:value={fileUploader}
					on:change={handleFileUpload}
					style="display:none;"
				/>
				<button class="delete" id="remove-image" on:click={handleRemoveImage}>Удалить</button>
			</div>
			<div class="block2">
			<div class="tabs">
				<label for="name" class="font-semibold ml-4">Фамилия и имя:</label>
				<input
					type="text"
					id="name"
					bind:value={userInputs.name}
					placeholder="Введите фамилия и имя.."
					required
				/>
				<label for="email" class="font-semibold ml-4">Email</label>
				<input type="email" id="email" bind:value={userInputs.email} placeholder="Введите email.." required />
				<label for="phone" class="font-semibold ml-4">Телефон</label>
				<input
					type="number"
					id="phone"
					bind:value={userInputs.phone}
					placeholder="Введите номер телефона.."
					required
				/>
				<label for="country" class="font-semibold ml-4">Страна</label>
				<input
					type="text"
					id="country"
					bind:value={userInputs.country}
					placeholder="Укажите страну.."
					required
				/>
				<label for="city" class="font-semibold ml-4">Город</label>
				<input type="text" id="city" bind:value={userInputs.city} placeholder="Укажите город.." required />
			</div>
		</div>
	</div>
		<button class="changes mx-auto" on:click={saveUserData}><div class="mx-auto text-lg">Сохранить изменения</div></button>
		<h1 id="target" class="text">Избранное</h1>
		<div class="car_grid">
			{#each limitedCars as car}
				<a href="/car-{car.id}"><Auto {car} /></a>
			{/each}
		</div>
	</div>
</body>

<style lang="scss">
	.main {
		max-width: 1000px;
		height: 700px;
		background-color: white;
		border-radius: 30px;
		border-width: 1px;
		border-color: black;
		position: relative;
		top: 40px;
		display: flex;
	}
	body {
		background: rgb(230, 229, 229);
		height: 100%;
	}
	.text {
		color: black;
		margin-left: 30px;
		margin-bottom: 15px;
		margin-top: 50px;
	}
	h1 {
		font-size: 35px;
	}
	.car_grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		@media (max-width: theme('screens.desktop')) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media (max-width: theme('screens.laptop')) {
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
		}
		@media (max-width: theme('screens.tablet')) {
			grid-template-columns: 1fr;
		}
	}
	.tabs {
		margin-left: 15px;
		margin-top: 80px;
		max-width: 410px;
	}
	input[type='text'],
	input[type='email'],
	input[type='number'] {
		width: 100%;
		padding: 12px;
		border: 1px solid #ccc;
		border-radius: 30px;
		box-sizing: border-box;
		margin-bottom: 16px;
		margin-top: 10px;
	}
	.label {
		display: flex;
		height: 50px;
		width: 220px;
		background-color: rgb(194, 7, 7);
		align-items: center;
		border-radius: 30px;
		font-size: 16px;
		line-height: 20px;
		color: white;
	}
	.photo {
		text-align: center;
		float: left;
		margin-right: 5px;
	}
	img {
		width: 20px;
		height: 20px;
		border-radius: 0%;
	}
	.block {
		height: 700px;
		width: 500px;
		display: grid;
	}
	.block2 {
		height: 700px;
		width: 500px;
	}
	.field {
		display: flex;
		width: 300px;
		height: 300px;
		border-radius: 50%;
		border-width: 1px;
		border-color: black;
		background-image: url('/man.png');
		background-repeat: no-repeat;
		background-position:5ch;
		margin-top: 90px;
	}
	.changes {
		display: flex;
		height: 50px;
		width: 220px;
		background-color: rgb(194, 7, 7);
		align-items: center;
		border-radius: 30px;
		font-size: 15px;
		color: white;
		position: relative;
		margin-top: 15px;
	}
	.delete {
		height: 50px;
		width: 175px;
		background-color: rgb(136, 132, 132);
		border-radius: 30px;
		font-size: 18px;
		color: white;
		margin-left: auto;
    margin-right: auto;
    margin-bottom: 105px;
	}
</style>
