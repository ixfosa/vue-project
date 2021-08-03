<template>
  <div>
    <Heador/>
    <Hslider/>
    <Novice/>
  </div>
</template>

<script>
  import Heador from "@/components/public/header.vue"
  import Hslider from "./hslider.vue"
  import Novice from "./novice.vue"

  export default {
    name: 'Index',
    components: {
      Heador,
      Hslider,
      Novice
    }
  }
</script>

<style lang="scss">

</style>
