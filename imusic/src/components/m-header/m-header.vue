<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Ixfosa Music</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

.m-header
  position: relative
  height: 45px
  text-align: center
  color: $color-theme
  .icon
    display: inline-block;
    vertical-align: top
    margin-top: 6px
    width: 30px
    height: 32px
    margin-right: 3px
    bg-image('logo')
    background-size: 30px
  .text
    display: inline-block
    vertical-align: top
    line-height: 44px
    font-size: $font-size-large
</style>
