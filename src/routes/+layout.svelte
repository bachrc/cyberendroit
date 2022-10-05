<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import NavBar from "../components/NavBar.svelte";
</script>
<svelte:head>
    <title>cyberpacha.space</title>
</svelte:head>
<div class="min-h-screen flex flex-col">
    <Header/>
    <nav class="bg-sky-200">
        <NavBar/>
    </nav>
    <main class="bg-gradient-to-b from-sky-200 to-violet-300 grow">
        <slot />
    </main>
</div>
