<template>
  <div id="app">
    
    <cheatSheet> </cheatSheet>
  </div>
</template>

<script>
import cheatSheet from './components/cheat-sheet.vue'

export default {
  name: 'app',
  components: {
    cheatSheet
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
