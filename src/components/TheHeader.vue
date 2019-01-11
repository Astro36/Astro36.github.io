<template>
  <header>
    <i class="material-icons" @click="open">menu</i>
    <a class="logo" :href="$url">{{ $title }}</a>
    <TheNavigationDrawer ref="drawer"/>
  </header>
</template>

<script>
import TheNavigationDrawer from './TheNavigationDrawer.vue';

export default {
  name: 'TheHeader',
  components: {
    TheNavigationDrawer,
  },
  methods: {
    open() {
      this.$refs.drawer.show();
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/global";

header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background-color: @toolbar-color;
  align-items: center;
  box-shadow: 0 2px 4px @shadow-color;
  z-index: 5;

  .material-icons {
    padding: 0 16px;
    color: @toolbar-text-color;
  }

  .logo {
    padding: 0 16px;
    color: @toolbar-text-color;
    font-size: 20px;
    font-weight: bold;
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
