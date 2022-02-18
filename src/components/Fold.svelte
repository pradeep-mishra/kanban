<aside class="aside">
  <div class="logo-wrap">
    <img src="/app-32x32.png" alt="logo" />
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
    z-index: 10;
    position: fixed;
    width: 64px;
    height: 100%;
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

  @media only screen and (max-width: 499px) {
    aside {
      width: 100%;
      height: 64px;
      flex-direction: row;
    }
    .logo-wrap {
      padding-top: 15px;
    }
    .social {
      flex-direction: row;
      padding-top: 15px;
      padding-right: 15px;
    }
    span {
      margin-left: 5px;
    }
  }
</style>
