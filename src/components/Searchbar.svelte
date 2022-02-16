<script>
  import { searchStr } from "../lib/store";
  let searchVal = "";
  let myIssue = false;
  $: searchStr.set(searchVal);

  function onClick() {
    if (myIssue) {
      searchStr.set("");
      myIssue = false;
    } else {
      searchStr.set("pradeep");
      myIssue = true;
    }
  }
</script>

<div class="search-container">
  <div class="search-box">
    <input bind:value={searchVal} type="text" />
  </div>
  <div class="user-icons">
    <div class="icon">
      <div class="icon-content">
        <span> R </span>
      </div>
    </div>
    <div class="icon">
      <div class="icon-content" size="32">
        <span> P </span>
      </div>
    </div>
    <div class="icon">
      <div class="icon-content">
        <span> M </span>
      </div>
    </div>
  </div>
  <button class:my-issue={myIssue == true} on:click={onClick}>
    My Issues
  </button>
</div>

<style>
  span {
    width: 32px;
    height: 32px;
    display: inline-block;
    padding-top: 6px;
  }
  .my-issue {
    background: rgb(210, 229, 254) none repeat scroll 0% 0% !important;
    color: rgb(0, 82, 204);
  }
  .search-container {
    display: flex;
    -moz-box-align: center;
    align-items: center;
    margin-top: 24px;
  }
  .search-box {
    margin-right: 18px;
    width: 160px;
    display: inline-block;
    height: 32px;
  }

  input {
    height: 28px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid rgb(223, 225, 230);
    color: rgb(23, 43, 77);
    background: rgb(244, 245, 247) none repeat scroll 0% 0%;
    transition: background 0.1s ease 0s;
    font-size: 14px;
    padding-left: 8px;
  }
  .user-icons {
    display: flex;
    flex-direction: row;
    margin: 0px 12px 0px 2px;
  }
  .icon {
    display: inline-flex;
    margin-left: -2px;
    border-radius: 50%;
    transition: transform 0.1s ease 0s;
    cursor: pointer;
    user-select: none;
  }
  .icon-content {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-position: 50% 50%;
    background-size: cover;
    background-color: rgb(235, 236, 240);
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px;
    text-align: center;
  }
  button {
    border-style: none;
    padding: 0px;
    margin-left: 6px;
    display: inline-flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    height: 32px;
    vertical-align: middle;
    line-height: 1;
    padding: 0px 12px;
    white-space: nowrap;
    border-radius: 3px;
    transition: all 0.1s ease 0s;
    appearance: none;
    cursor: pointer;
    user-select: none;
    font-size: 14.5px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    color: rgb(66, 82, 110);
    font-weight: normal;
  }
  button:hover {
    background: rgb(235, 236, 240) none repeat scroll 0% 0%;
  }
</style>
