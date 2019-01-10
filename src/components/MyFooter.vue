<template>
  <footer>
    <span>
      © 2019
      <a href="https://github.com/Astro36">Seungjae Park</a>
    </span>
    <br>
    <span>
      View on
      <a href="https://github.com/Astro36/portfolio">GitHub</a>
    </span>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/global";

footer {
  display: flex;
  padding: 32px;
  background-color: @footer-color;
  color: @footer-text-color;
  justify-content: space-between;

  a {
    font-weight: bold;
    color: @footer-text-color;
    text-decoration: none;
  }

  @media @large, @xlarge {
    margin-left: 256px;
  }
}
</style>
