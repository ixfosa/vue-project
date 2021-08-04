<template>
  <div>
    <Islider/>
    <Service/>
    <Welfare/>
  </div>
</template>

<script>
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
