<template>
  <div>
    <Heador/>
    <Navbar/>
  </div>
</template>

<script>
  import Heador from "@/components/public/header.vue"
  import Navbar from "@/components/public/navbar.vue"
  import Footer from "@/components/public/footer.vue"
  export default {
    components: {
      Heador,
      Navbar
    }
  }
</script>

<style>
</style>
