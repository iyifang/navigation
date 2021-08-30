<template>
  <div id="admin">
    <h1>控制台</h1>
    <button @click="test">模拟请求</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
  },
  methods: {
    test() {
      console.log(process.env)
    },
  },
};
</script>

<style lang='scss' scoped>
#admin {
  height: 100%;
}
</style>
