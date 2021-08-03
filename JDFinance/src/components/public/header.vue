<template>
  <div :class="$style.header">
    <span :class="$style.left">
      <em>注册</em>&ensp;|&nbsp;<em>登陆</em>
    </span>
    <Btn :class="$style.btnDownload" @click.native="goToGithub">APP下载</Btn>
  </div>
</template>

<script>
  import Btn from "@/components/core/btn.vue"

  export default {
    components: {
      Btn
    },
    methods: {
      goToGithub() {
        location.href = 'https://github.com/ixfosa';
      }
    }
  }
</script>

<style lang="scss" module>
  .header{
    color: #666;
    height: 100px;
    line-height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 32px;
    background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    background-size: auto 50%;
    z-index: 100;
    .left{
      font-size: 28px;
      height: 30px;
      line-height: 30px;
      margin: 17px 0 0 20px;
    }
    .btnDownload{
      float: right;
      font-size: 24px;
      border-width: 0;
      height: 56px;
      line-height: 56px;
      min-width: 120px;
      padding: 0;
      border-radius: 4px;
      margin: 23px 24px 0 0;
    }
  }
</style>
