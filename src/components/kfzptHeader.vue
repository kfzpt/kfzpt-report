<template>
  <div class="report_header">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'report_header',
    data () {
      return {
        msg: '开发者平台部 Q3 汇报'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .report_header {
    padding-top: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  h1 {
    font-weight: normal;
    height: 60px;
    line-height: 60px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 15%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.1) 85%,
      rgba(255, 255, 255, 0) 100%)
  }
</style>
