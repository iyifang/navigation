<template>
  <div id="admin">
    <h1>控制台</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      let arr = [0, 1, 2, 3, 4, 5, 6];
      arr.some((item) => {
        if (item === 3) {
          return true;
        }
      });
    },
  },
};
</script>

<style>
</style>