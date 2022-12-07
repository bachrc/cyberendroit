<script>
    import "../app.css";
    import "../styles/fonts.css"
    import Header from "../components/Header.svelte";
    import NavBar from "../components/NavBar.svelte";
    import Footer from "../components/Footer.svelte";
</script>
<svelte:head>
    <title>cyberpacha.space</title>
</svelte:head>
<div class="min-h-screen flex flex-col bg-indigo-200">
    <Header/>
    <NavBar/>
    <div class="grow container mx-auto">
        <slot />
    </div>
    <Footer/>
</div>
