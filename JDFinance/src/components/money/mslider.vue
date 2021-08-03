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
              href: "home",
              src: "//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320",
            },
            {
              href: "home",
              src: "//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320",
            },
            {
              href: "home",
              src: "//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320",
            }
          ],
          enters: [
            {
              href: "home",
              img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
              title: "优惠券",
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
