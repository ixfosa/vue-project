<template>
  <div>
    <Heador/>
    <Hslider/>
    <Novice/>
    <Borrow/>
    <Money/>
  </div>
</template>

<script>
  import Heador from "@/components/public/header.vue"
  import Hslider from "./hslider.vue"
  import Novice from "./novice.vue"
  import Borrow from "./borrow.vue"
  import Money from "./Money.vue"

  export default {
    name: 'Index',
    components: {
      Heador,
      Hslider,
      Novice,
      Borrow,
      Money
    }
  }
</script>

<style lang="scss">

</style>
