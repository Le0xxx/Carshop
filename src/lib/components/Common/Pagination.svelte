<script lang="ts">
	export let maxPage: number;
	export let currentPage: number;
</script>

<ul class="pagination">
	<li>
		{#if currentPage>1}
		<a class="pagination_item" href="/?page={currentPage - 1}#title">
			<img src="/icon/left.svg" alt="left" /></a>
			{/if}
	</li>
	{#each Array(maxPage) as _, idx}
		<li>
			<a
				class="pagination_item"
				class:pagination_item_active={currentPage === idx + 1}
				href="/?page={idx + 1}#title">{idx + 1}
			</a>
		</li>
	{/each}
	<!--<li>
		<a class="pagination_item pagination_item_active" href="/">1</a>
	</li>
	<li>
		<a class="pagination_item" href="/">2</a>
	</li>
	<li>
		<a class="pagination_item" href="/">3</a>
	</li>
	<li>
		<a class="pagination_item" href="/">4</a>
	</li>-->
	<li>
		{#if currentPage<maxPage}
		<a class="pagination_item" href="/?page={currentPage + 1}#title">
			<img src="/icon/right.svg" alt="right" />
		</a>
		{/if}
	</li>
</ul>

<style>
	.pagination {
		border: 1px solid var(--light);
		border-radius: 20px;
		display: flex;
	}
	.pagination_item {
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.pagination_item_active {
		color: var(--primary);
	}
	.pagination_item:hover {
		color: var(--primary);
	}
</style>
