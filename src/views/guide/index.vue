<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-12 22:18:14
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-12 22:46:39
 * @Author: laptop-fpejg53f
-->
<template>
  <div>
    <h1>指引插件</h1>
    <p>
      <a href="https://madewith.cn/766"
         style="color: #e53935"
         target="_blank">Driver.js</a>
      是一个功能强大且高度可定制的基于原生JavaScript开发的新用户引导库。它没有依赖项，支持所有主要浏览器。
    </p>
    <el-button type="primary"
               @click.prevent.stop="guide">开启指引</el-button>
  </div>
</template>

<script>
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import steps from "./steps"
export default {
  name: 'Guide',
  data () {
    return {
      driver: null
    }
  },
  mounted () {
    this.driver = new Driver()
  },
  methods: {
    guide () {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>

<style>
</style>