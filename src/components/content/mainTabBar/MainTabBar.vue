<template>
  <div id="mainTabBar">
    <TabBar>
      <TabBarItem path='home'>
        <img src='../../../assets/img/tabBar/logo.png' slot="TabBAarImg">
        <div slot="TabBarTab">首页</div>
        <div slot="TabBarTabActive">首页</div>
      </TabBarItem>
      <TabBarItem path='find'>
        <img src='../../../assets/img/tabBar/logo.png' slot="TabBAarImg">
        <div slot="TabBarTab">发现</div>
        <div slot="TabBarTabActive">发现</div>
      </TabBarItem>
      <TabBarItem path='about'>
        <img src='../../../assets/img/tabBar/logo.png' slot="TabBAarImg">
        <div slot="TabBarTab">关于</div>
        <div slot="TabBarTabActive">关于</div>
      </TabBarItem>
      <TabBarItem path='profile'>
        <img src='../../../assets/img/tabBar/logo.png' slot="TabBAarImg">
        <div slot="TabBarTab">我的</div>
        <div slot="TabBarTabActive">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import  TabBar from '../../common/TabBar/TabBar'
import  TabBarItem from '../../common/TabBar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
</style>
