<template>
  <div>
    <Mslider/>
    <Ada/>
    <Money/>
    <Adb/>
    <Finance/>
    <Adc/>
  </div>
</template>

<script>
  import Mslider from "./mslider.vue"
  import Ada from "./ada.vue"
  import Money from "./money.vue"
  import Adb from "./adb.vue"
  import Finance from "./finance.vue"
  import Adc from "./adc.vue"

  export default {
    components: {
      Mslider,
      Ada,
      Money,
      Adb,
      Finance,
      Adc
    }
  }
</script>

<style>
</style>
