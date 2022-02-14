<script>
  import { filtered } from "../lib/store";
  import Board from "./Board.svelte";
  const flipDurationMs = 200;
</script>

<div>
  {#each $filtered as board (board.id)}
    <Board {board} />
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    margin: 26px 0px 0px 0px;
  }
</style>
