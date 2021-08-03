<template>
  <div>
    <Islider/>
    <Service/>
    <Welfare/>
  </div>
</template>

<script>
  import Heador from "@/components/public/header.vue"
  import Navbar from "@/components/public/navbar.vue"
  import Footer from "@/components/public/footer.vue"

  import Islider from "./islider.vue"
  import Service from "./service.vue"
  import Welfare from "./welfare.vue"


  export default {
    components: {
      Islider,
      Service,
      Welfare
    }
  }
</script>

<style>
</style>
