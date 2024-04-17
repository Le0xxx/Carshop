<script lang="ts">
	import { zxcvbn, zxcvbnOptions, type Score } from '@zxcvbn-ts/core';
	import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
	import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en';

	let password = '';
	let secpassword= '';

	const { translations } = zxcvbnEnPackage;
	const { adjacencyGraphs: graphs, dictionary: commonDictionary } = zxcvbnCommonPackage;
	const { dictionary: englishDictionary } = zxcvbnEnPackage;

	const options = {
		translations,
		graphs,
		dictionary: { ...commonDictionary, ...englishDictionary }
	};
	zxcvbnOptions.setOptions(options);

	$: ({ score } = zxcvbn(password));

	let strengthDescription = 'Слабый';
	$: switch (score) {
		case 3:
			strengthDescription = 'ОК';
			break;
		case 4:
			strengthDescription = 'Хороший';
			break;
		case 0:
		case 1:
		case 2:
		default:
			strengthDescription = 'Слабый';
	}
	let name = '';
	let email = '';
	function handleSubmit(event: { preventDefault: () => void }) {
		event.preventDefault();
	}
	let type = 'password';
	let showPassword = false;
	let noPassword = false;

	function togglePassword() {
		showPassword = !showPassword;
	}
	function fogglePassword() {
		noPassword = !noPassword;
	}
</script>

<div class="regist">
	<div class="container">
		<h2 class="reg_head">Регистрация</h2>
		<form on:submit={handleSubmit}>
			<div class="tabs">
				<label for="name" class="font-semibold">Фамилия и имя:</label>
				<input
					type="text"
					id="name"
					bind:value={name}
					placeholder="Введите фамилия и имя.."
					required
				/>
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
							on:click={togglePassword}
						/>
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
							on:click={togglePassword}
						/>
					{/if}
				</div>
				<label for="password" class="font-semibold">Повторите пароль:</label>
				<div class="vis">
					{#if noPassword}
						<input id="password" type="text" bind:value={secpassword} placeholder="Введите пароль.." />
						<!-- svelte-ignore a11y-missing-content -->
						<a
							href="#"
							class="password-control {type === 'text' ? 'view' : ''}"
							on:click={fogglePassword}
						/>
					{:else}
						<input
							id="password"
							type="password"
							bind:value={secpassword}
							placeholder="Введите пароль.."
						/>
						<!-- svelte-ignore a11y-missing-content -->
						<a
							href="#"
							class="password-control-no {type === 'text' ? 'view' : ''}"
							on:click={fogglePassword}
						/>
					{/if}
				</div>
				<label for="password-strength" class="tabs mb-1"
					>Сложность пароля: {strengthDescription}</label
				>
				<meter id="password-strength" value={score} low="1.9" high="2.9" optimum="4" max="4" />
				<input type="submit" value="Зарегистрироваться" />
			</div>
		</form>
		<div class="reg_head">Уже зарегистрированы? <a class="plain" href="/signup">Войти</a></div>
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
		height: 530px;
		position: relative;
		margin: 2% auto;
		background: #fff;
		padding: 5px;
		overflow: hidden;
		border: 1px solid #f1f1f1;
		box-shadow: 0 0 20px 0 #e4e4e4;
		border-radius: 20px;
	}
	input[type='secpassword'],
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
		height: 35px;
		margin-top: 8px;
	}

	input[type='submit']:hover {
		background-color: #45a049;
	}
	.plain {
		text-decoration: underline;
		color: rgb(3, 3, 112);
	}
	.password-control {
		position: absolute;
		right: 18px;
		bottom: 30px;
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
	}
	.password-control-no {
		position: absolute;
		right: 18px;
		bottom: 30px;
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
	}
	.vis {
		position: relative;
	}
</style>
