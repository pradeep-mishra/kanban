<script>
  import Header from "../components/Header.svelte";
  import BoardContainer from "./BoardContainer.svelte";
  import Breadcrum from "./Breadcrum.svelte";
  import Fold from "./Fold.svelte";
  import Searchbar from "./Searchbar.svelte";
  import Title from "./Title.svelte";
  let icon = "/app-32x32.png";
</script>

<main>
  <Fold />
  <div class="container">
    <Header />
    <div class="content">
      <Breadcrum name="My Website" />
      <Title name="My Website" />
      <Searchbar />
      <BoardContainer />
    </div>
  </div>
</main>

<style>
  main {
    min-height: 100%;
    width: 100%;
    min-width: 460px;
    /*display: grid;
    grid-template-columns: 64px 1fr;
    */
  }

  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .content {
    height: 100%;
    padding-left: 80px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 499px) {
    .content {
      padding-left: 10px;
      padding-top: 50px;
    }
  }
</style>
