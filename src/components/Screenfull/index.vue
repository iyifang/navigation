<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-12 20:09:51
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-12 21:14:58
 * @Author: laptop-fpejg53f
-->
<template>
  <div>
    <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen' "
              @click="click" />
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'Screenfull',
  data () {
    return {
      isFullscreen: false
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    click () {
      if (!screenfull.isEnabled)
      {
        this.$message({
          message: '浏览器不支持',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    change () {
      this.isFullscreen = screenfull.isFullscreen
    },
    init () {
      if (screenfull.enabled)
      {
        screenfull.on('change', this.change)
      }
    },
    destroy () {
      if (screenfull.isEnabled)
      {
        screenfull.off('change', this.change)
      }
    }
  },


}
</script>

<style lang="scss" scoped>
.screenfull-svg {
  display: inline-block;
  cursor: pointer;
  fill: #5a5e66;
  width: 20px;
  height: 20px;
  vertical-align: 10px;
}
</style>