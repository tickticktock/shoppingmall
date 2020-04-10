<template>
  <div class="NavBar" :style="{backgroundColor: bgcolor}">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    bgcolor: {
      type: String,
      default: 'blue'
    }
  }
};
</script>

<style scoped>
.NavBar {
  display: flex;
  position: fixed;
  top: 0;
  /* left: 0; */
  line-height: 44px;
  height: 44px;
  width: 100%;
  color: #ffffff;
}
.nav-left,
.nav-right {
  width: 50px;
}
.nav-center {
  flex: 1;
  /* background-color: blue; */
}
</style>