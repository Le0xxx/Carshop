<script lang="ts">
	let password = '';
	let email = '';
	let type = 'password';
	function handleSubmit(event: { preventDefault: () => void }) {
		event.preventDefault();
	}
	let showPassword = false;

	function togglePassword() {
		showPassword = !showPassword;
	}
</script>

<div class="regist">
	<div class="container">
		<h2 class="reg_head">Вход</h2>
		<form on:submit={handleSubmit}>
			<div class="tabs">
				<label for="email" class="font-semibold">Email:</label>
				<input type="email" id="email" bind:value={email} placeholder="Введите email.." required />
				<label for="password" class="font-semibold">Пароль:</label>
				<div class="vis">
					{#if showPassword}
						<input id="password" type="text" bind:value={password} placeholder="Введите пароль.." />
						<!-- svelte-ignore a11y-missing-content -->
						<a
					href="#"
					class="password-control {type === 'text' ? 'view' : ''}"
					on:click={togglePassword}				/>
						
					{:else}
						<input
							id="password"
							type="password"
							bind:value={password}
							placeholder="Введите пароль.."
						/>
						<!-- svelte-ignore a11y-missing-content -->
						<a
					href="#"
					class="password-control-no {type === 'text' ? 'view' : ''}"
					on:click={togglePassword}				/>
					{/if}
				</div>
				<a href="/"><input type="submit" value="Войти" /></a>
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	.tabs {
		margin-left: 5px;
		margin-right: 5px;
	}
	.reg_head {
		text-align: center;
		padding: 5px;
	}
	.regist {
		background: rgb(230, 229, 229);
		padding: 50px 0;
		border-top: 1px solid var(--light);
		min-height: 899px;
	}
	.container {
		width: 400px;
		height: 290px;
		position: relative;
		margin: 2% auto;
		background: #fff;
		padding: 5px;
		overflow: hidden;
		border: 1px solid #f1f1f1;
		box-shadow: 0 0 20px 0 #e4e4e4;
		border-radius: 20px;
	}
	input[type='text'],
	input[type='email'],
	input[type='password'] {
		width: 100%;
		padding: 12px;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
		margin-bottom: 16px;
	}

	input[type='submit'] {
		background-color: #4caf50;
		color: #fff;
		border: none;
		border-radius: 20px;
		cursor: pointer;
		font-size: 16px;
		margin-bottom: 8px;
		width: 100%;
		height: 30px;
	}

	input[type='submit']:hover {
		background-color: #45a049;
	}
	.password-control {
		position: absolute;
		right: 18px;
		bottom: 30px;
		width: 20px;
		height: 20px;
		background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
	}
	.password-control-no {
		position: absolute;
		right: 18px;
		bottom: 30px;
		width: 20px;
		height: 20px;
		background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
	}
	.vis {
		position: relative;
	}
</style>
