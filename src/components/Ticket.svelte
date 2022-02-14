<script>
  export let ticket;
</script>

<a class="card" aria-label={ticket.id} href={ticket.url}>
  <div class="content">
    <p>{ticket.title}</p>
    <div class="footer">
      <div />
      <div class="user-icon">
        <div class="icon-wrap">
          <span class="icon">
            {ticket.assignee.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  </div>
</a>

<style>
  a {
    cursor: -webkit-grab;
    cursor: grab;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    touch-action: manipulation;
    display: block;
    margin-bottom: 5px;
    color: inherit;
    text-decoration: none;
    background-color: transparent;
  }
  .content {
    padding: 10px;
    border-radius: 3px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 2px 0px;
    transition: background 0.1s ease 0s;
    cursor: pointer;
    user-select: none;
  }
  p {
    padding-bottom: 11px;
    font-size: 15px;
    line-height: 1.4285;
  }
  .footer {
    display: flex;
    -moz-box-pack: justify;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
  }
  .user-icon {
    display: flex;
    flex-direction: row-reverse;
    margin-left: 2px;
  }
  .icon-wrap {
    text-align: center;
  }
  .icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background-position: 50% 50%;
    background-size: cover;
    margin-left: -2px;
    background-color: rgb(235, 236, 240);
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px;
    padding-top: 2px;
  }
</style>
