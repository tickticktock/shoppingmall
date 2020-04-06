<template>
  <div class="TabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar',
  data () {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
  .TabBar {
    width: 100%;
    height: 49px;
    display: flex;
    position: fixed;
    bottom: 0;
  }
  
</style>
