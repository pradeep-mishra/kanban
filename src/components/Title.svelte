<script>
  export let name = "Site";
</script>

<div class="title-container">
  <div class="title">{name}</div>
</div>

<style>
  .title-container {
    margin-top: 10px;
    display: flex;
    -moz-box-pack: justify;
    justify-content: space-between;
  }
  .title {
    font-size: 24px;
    font-weight: 500;
  }
</style>
