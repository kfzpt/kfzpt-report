<template>
  <div class="report_footer">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'report_footer',
  data () {
    return {
      msg: '我是底栏'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.report_footer {
  height: 40px;
  color: #FFFFFFFF;
}
h1 {
  font-weight: normal;
}

</style>
