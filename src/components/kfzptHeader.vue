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
  height: 60px;
  padding-top: 20px;
  color: #FFFFFFFF;
}
h1 {
  font-weight: normal;
}
</style>
