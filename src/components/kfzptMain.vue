<template>
  <div class="report_main">
    <kfzptHeader></kfzptHeader>
    <kfzptDate></kfzptDate>
    <kfzptFooter></kfzptFooter>
  </div>
</template>

<script>
import kfzptHeader from './kfzptHeader'
import kfzptDate from './kfzptDate'
import kfzptFooter from './kfzptFooter'
export default {
  name: 'report_main',

  components: {
    kfzptHeader: kfzptHeader,
    kfzptDate: kfzptDate,
    kfzptFooter: kfzptFooter
  },

  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.report_main {
  background-image: url(../assets/bgmain.jpg);
  background-repeat: round;
  width: 100%;
  height: 760px;
}
</style>
