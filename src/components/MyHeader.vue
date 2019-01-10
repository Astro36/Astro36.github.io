<template>
  <header>
    <i class="material-icons" @click="open">menu</i>
    <a class="logo" href>Title</a>
    <my-navigation ref="nav"></my-navigation>
  </header>
</template>

<script>
import MyNavigation from './MyNavigation.vue';

export default {
  name: 'MyHeader',
  components: {'my-navigation': MyNavigation},
  methods: {
    open() {
      this.$refs.nav.show();
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/global";

header {
  align-items: center;
  display: flex;
  height: 56px;
  background-color: @toolbar-color;
  box-shadow: 0 2px 4px @shadow-color;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  .material-icons {
    padding: 0 16px;
    color: @toolbar-text-color;
  }

  .logo {
    padding: 0 16px;
    color: @toolbar-text-color;
    font-size: 20px;
    line-height: 20px;
    text-decoration: none;
  }

  @media @large, @xlarge {
    left: 256px;

    .material-icons {
      display: none;
    }
  }
}
</style>
