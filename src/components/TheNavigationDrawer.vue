<template>
  <div>
    <transition name="slide">
      <nav v-if="largeViewport || visible">
        <header>
          <img v-if="$author.avatar" class="avatar" :src="$author.avatar" alt="Author Avatar">
          <span class="name">{{ $author.name }}</span>
          <a class="email" href="$authorEmail">{{ $author.email }}</a>
        </header>
        <hr>
        <ul>
          <li>aaa</li>
        </ul>
      </nav>
    </transition>
    <transition name="fade">
      <div class="scrim" v-if="visible" @click="dismiss"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheNavigationDrawer',
  data() {
    return {
      largeViewport: window.innerWidth >= 720,
      visible: false,
    };
  },
  created() {
    window.addEventListener('resize', this.calculateWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.calculateWidth);
  },
  methods: {
    calculateWidth() {
      this.largeViewport = window.innerWidth >= 720;
      this.visible = false;
    },
    dismiss() {
      this.visible = false;
    },
    show() {
      this.visible = true;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/global";

nav {
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

  span {
    color: @navigation-text-color;
  }

  header {
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: flex-end;

    .avatar {
      padding: 8px 0;
      width: 80px;
      height: 80px;
    }

    .name {
      padding: 8px 0;
      font-size: 20px;
      font-weight: bold;
      line-height: 20px;
    }

    .email {
      font-size: 16px;
      line-height: 20px;
    }
  }

  ul {
    margin: 16px;
    font-size: 14px;
  }

  @media @xsmall, @small, @medium {
    width: calc(100vw - 56px);
    transition: 0.5s;
  }

  @media @large, @xlarge {
    width: 256px;
  }
}

.scrim {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: @scrim-color;
  transition: opacity 0.5s;
  z-index: 10;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
