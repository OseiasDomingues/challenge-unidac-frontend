<template>
  <div class="app">
    <headerApp />
    <router-view path="$router.key"/>
  </div>
</template>

<script>
import headerApp from "./components/header-app.vue";
export default {
  name: "App",
  components: {
    headerApp,
    
  },
};
</script>

<style>
</style>
