<template>
  <div>
    <Hslider/>
    <Novice/>
    <Borrow/>
    <Money/>
    <Product/>
    <Life/>
  </div>
</template>

<script>
  import Hslider from "./hslider.vue"
  import Novice from "./novice.vue"
  import Borrow from "./borrow.vue"
  import Money from "./Money.vue"
  import Product from "./product.vue"
  import Life from "./life.vue"

  export default {
    components: {
      Hslider,
      Novice,
      Borrow,
      Money,
      Product,
      Life,
    }
  }
</script>

<style lang="scss">

</style>
