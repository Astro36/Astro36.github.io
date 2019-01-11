<template>
  <footer>
    <span>
      © 2019
      <a :href="$author.github">{{ $author.name }}</a>
    </span>
    <br>
    <span>
      View on
      <a href="https://github.com/Astro36/Astro36.github.io">GitHub</a>
    </span>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style lang="less" scoped>
@import "../styles/global";

footer {
  display: flex;
  padding: 32px;
  background-color: @footer-color;
  color: @footer-text-color;
  justify-content: space-between;

  a {
    color: @footer-text-color;
    font-weight: bold;
    text-decoration: none;
  }

  @media @large, @xlarge {
    margin-left: 256px;
  }
}
</style>
