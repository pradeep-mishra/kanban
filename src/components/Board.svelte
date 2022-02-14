<script>
  // @ts-nocheck
  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  import Ticket from "../components/Ticket.svelte";
  import { boards } from "../lib/store";
  export let board;
  const flipDurationMs = 200;

  function getIndex(id, collection) {
    return collection.findIndex((item) => item.id === id);
  }

  function handleDndCards(ticketId, e) {
    const colIdx = getIndex(ticketId, $boards);
    $boards[colIdx].tickets = e.detail.items;
    $boards = [...$boards];
  }
  function transformDraggedElement(dragElm, data, index) {
    let elm = dragElm.querySelector(".card");
    elm.style.transform = "rotate(5deg)";
  }
</script>

<div class="board">
  <div class="title">
    <span>{board.title}</span>
    <span
      >{board.tickets.length
        ? ` ${board.tickets.length} ${
            board.tickets.length > 1 ? "tasks" : "task"
          }`
        : ""}</span
    >
  </div>
  <div
    class="content"
    use:dndzone={{
      items: board.tickets,
      flipDurationMs,
      dropTargetStyle: { outline: "white" },
      transformDraggedElement
    }}
    on:consider={(e) => handleDndCards(board.id, e)}
    on:finalize={(e) => handleDndCards(board.id, e)}
  >
    {#each board.tickets as ticket (ticket.id)}
      <div animate:flip={{ duration: flipDurationMs }}>
        <Ticket {ticket} />
      </div>
    {/each}
  </div>
</div>

<style>
  .board {
    display: flex;
    flex-direction: column;
    margin: 0px 5px;
    min-height: 400px;
    width: 25%;
    border-radius: 3px;
    background: rgb(244, 245, 247) none repeat scroll 0% 0%;
  }
  .title {
    padding: 13px 10px 17px;
    text-transform: uppercase;
    color: rgb(94, 108, 132);
    font-size: 12.5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  span {
    font-size: 13px;
    text-transform: uppercase;
    color: rgb(94, 108, 132);
    white-space: nowrap;
    font-weight: 600;
  }
  .content {
    height: 100%;
    padding: 0px 5px;
    overflow-anchor: none;
  }
</style>
