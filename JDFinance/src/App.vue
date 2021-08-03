<template>
  <div id="app">
    <Heador/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer/>
    <Navbar/>
  </div>
</template>

<script>
  import Heador from "@/components/public/header.vue"
  import Footer from "@/components/public/footer.vue"
  import Navbar from "@/components/public/navbar.vue"
  export default {
    name: 'App',
    components: {
      Heador,
      Footer,
      Navbar
    }
  }
</script>


<style lang="scss">
  @import "style/reset.scss";
</style>
