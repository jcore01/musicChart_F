<template>
  <div id="app">
    <head-title></head-title>
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import HeadTitle from "./components/HeadTitle.vue";

export default {
  components: {
    ToolBar,
    HeadTitle,
  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body {
  padding: 0;
  margin: 0;
}
</style>
