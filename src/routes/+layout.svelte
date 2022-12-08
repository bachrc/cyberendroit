<script>
    import "../styles/reset.css"
    import "../styles/globals.css"
    import "../styles/fonts.css"
    import Header from "../components/Header.svelte";
    import NavBar from "../components/NavBar.svelte";
    import Footer from "../components/Footer.svelte";
</script>
<svelte:head>
    <title>cyberpacha.space</title>
</svelte:head>
<main>
    <Header/>
    <NavBar/>
    <div class="content">
        <slot />
    </div>
    <Footer/>
</main>
<style>
    main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: rgb(199 210 254)
    }

    .content {
        flex-grow: 1;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }

    @media (min-width: 640px) {
        .content {
            max-width: 640px;
        }
    }
    @media (min-width: 768px) {
        .content {
            max-width: 768px;
        }
    }
    @media (min-width: 1024px) {
        .content {
            max-width: 1024px;
        }
    }
    @media (min-width: 1280px) {
        .content {
            max-width: 1280px;
        }
    }
    @media (min-width: 1536px) {
        .content {
            max-width: 1536px;
        }
    }
</style>
