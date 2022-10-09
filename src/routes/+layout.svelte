<script>
    import "../app.css";
    import "../styles/fonts.css"
    import Header from "../components/Header.svelte";
    import NavBar from "../components/NavBar.svelte";
</script>
<svelte:head>
    <title>cyberpacha.space</title>
</svelte:head>
<div class="min-h-screen flex flex-col">
    <Header/>
    <nav class="bg-indigo-200">
        <NavBar/>
    </nav>
    <main class="bg-indigo-200 grow">
        <slot />
    </main>
</div>
