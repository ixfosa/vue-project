<template>
  <section :class="$style.content">
    <Slider :items="items" :cname="$style.slider"/>
  </section>
</template>
<script>
    import Slider from "@/components/core/slider.vue"
    export default {
      data() {
        return {
          items: [
            {
              href: "ious",
              src: "//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320",
            },
            {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320",
            }
          ]
        }
      },
      components: {
        Slider
      }
    }
</script>

<style lang="scss" module>
  .slider{
    margin-top: 100px;
    img{
      width: 100%;
    }
  }
</style>
