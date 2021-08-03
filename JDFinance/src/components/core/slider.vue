<template>
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiperSlide v-for="(item,index) in items" :key="item.src">
        <router-link :to="{ name: item.href }">
          <img :src="item.src" >
        </router-link>
      </swiperSlide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination" />
    </swiper>
  </section>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper"
  export default {
    props: {
      options: {
        type: Object,
        default() {
          return {
            autoplay: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
            },
            notNextTick: false
          }
        }
      },
      items: {
        type: Array,
        default() {
          return []
        }
      },
      cname: {
        type: String,
        default: ""
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="css">
  @import "swiper/dist/css/swiper.css";
</style>
