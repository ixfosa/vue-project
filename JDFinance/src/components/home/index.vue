<template>
  <div>
    <Heador />
    <Hslider />
  </div>
</template>

<script>
  import Heador from "@/components/public/header.vue"
  import Hslider from "./hslider.vue"

  export default {
    name: 'Index',
    components: {
      Heador,
      Hslider
    }
  }
</script>

<style lang="scss">

</style>
