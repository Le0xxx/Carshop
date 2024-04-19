<script>
	import Main from '$lib/components/Main/Main.svelte';
	import IHeader from '$lib/components/Header/IHeader.svelte';
	import { isOverlayOpen } from '../../popup/Overlay';
	import Footer from '$lib/components/Footer.svelte';
	import OverlayOpen from '$lib/components/Overlay/OverlayOpen.svelte';
</script>

<IHeader />
{#if $isOverlayOpen }
<OverlayOpen>
<p></p>
</OverlayOpen>
{/if}
<Main />
<Footer />