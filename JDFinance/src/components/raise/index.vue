<template>
  <div>
    <Rslider/>
    <Daily/>
    <In/>
    <More/>
  </div>
</template>

<script>
  import Rslider from "./rslider.vue"
  import Daily from "./daily.vue"
  import In from "./in.vue"
  import More from "./more.vue"

  export default {

    components: {
      Rslider,
      Daily,
      In,
      More,
    }
  }
</script>
