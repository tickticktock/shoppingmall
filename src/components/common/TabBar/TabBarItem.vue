<template>
  <div class="TabBarItem" @click="clickItem">
    <slot name="TabBAarImg"></slot>
    <div :class="{active:isActive}">
      <slot v-if="!isActive" name="TabBarTab"></slot>
      <slot v-else name="TabBarTabActive"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props: {
    path: {
      type: String
    }
  },
  data () {
    return {
      // isActive: false
    }
  },
  methods: {
    clickItem() {
      if(this.$route.path != '/'+this.path) {
        this.$router.push(this.path)
        console.log(this.path)
        console.log(this.$route)
      }
    }
  },
  computed: {
    isActive () {
      return '/'+this.path==this.$route.path
    }
  },
  components: {

  }
}
</script>

<style scoped>
  .TabBarItem {
    flex: 1;
    text-align: center;
  }
  .TabBarItem>img {
    width: 24px;
    height: 24px;
  }
  .active {
    color: blue;
  }
</style>
