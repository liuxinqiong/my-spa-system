<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/header.vue";
  import Footer from "@/components/footer.vue";
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }

</script>

<style lang="scss" scoped>
#app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
#cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #555;
    opacity: 0.5;
    z-index: -1;
}
</style>
