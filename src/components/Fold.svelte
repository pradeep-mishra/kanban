<script>
  let icon = "/app-32x32.png";
</script>

<aside>
  <div class="logo-wrap">
    <img src={icon} alt="logo" />
  </div>
  <div class="social">
    <span>
      <a target="_blank" href="https://github.com/pradeep-mishra/kanban">
        <img src="/github.png" alt="github" />
      </a>
    </span>
    <span>
      <a target="_blank" href="https://www.linkedin.com/in/ipradeepmishra/">
        <img src="/linkedin.png" alt="linkedin" />
      </a>
    </span>
    <span>
      <a target="_blank" href="https://twitter.com/ipradeepmishra">
        <img src="/twitter.png" alt="twitter" />
      </a>
    </span>
  </div>
</aside>

<style>
  .logo-wrap {
    width: 100%;
    height: 32px;
    padding-left: 15px;
    padding-top: 26px;
  }
  img {
    width: 32px;
    height: 32px;
  }
  aside {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #2d3e50;
  }
  .social {
    padding-left: 15px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
  }
  img {
    background-color: #ccd6dd;
    border-radius: 8px;
  }
  .social > span {
    margin-bottom: 10px;
  }
</style>
