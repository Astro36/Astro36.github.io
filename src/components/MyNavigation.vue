<template>
  <nav>
    <header>
      <img class="avatar">
      <a class="name" href>Name</a>
      <a class="email" href>email</a>
    </header>
    <hr>
    <ul>
      <li>aaa</li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/global";

nav {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: @navigation-color;
  border-right: 1px solid @divider-color;
  z-index: 20;

  a {
    color: @navigation-text-color;
    text-decoration: none;
  }

  header {
    display: flex;
    height: 128px;
    flex-direction: column;
    justify-content: flex-end;

    .avatar {
      padding: 0 16px;
      width: 64px;
      height: 64px;
    }

    .name {
      padding: 8px 16px;
      font-size: 20px;
      line-height: 20px;
    }

    .email {
      padding: 0 16px;
      font-size: 16px;
      line-height: 20px;
    }
  }

  ul {
    margin: 16px;
    font-size: 14px;
  }

  @media @large, @xlarge {
    display: block;
    width: 256px;
  }
}
</style>
