<template>
  <div class="report_footer" @click="onclick">
  </div>
</template>

<script>
export default {
  name: 'report_footer',
  data () {
    return {
      startMove: 0,
      startTranslate: 0,
      distance: 0,
      timer: null
    }
  },
  methods: {
    onclick (event) {
      if (this.startMove === 1 && this.timer) {
        this.startMove = 0
        clearInterval(this.timer)
        return
      }
      this.startMove = 1
      var navdrag = document.getElementById('report_date')
      var translates = navdrag.style.transform
      if (!translates) {
        translates = navdrag.style.webkitTransform
      }
      if (translates) {
        this.startTranslate = parseFloat(translates.toString().substring(10).split(',')[0])
      } else {
        this.startTranslate = 0
      }
      this.distance = 0
      var that = this
      this.timer = setInterval(function () {
        that.distance -= 5
        that.setTitleTransform(that.distance)
      }, 100)
    },
    setTitleTransform (distance) {
      var navdrag = document.getElementById('report_date')
      var touchDelta = distance + this.startTranslate
      if (touchDelta > 0) {
        touchDelta = 0
      }
      navdrag.style.transform = navdrag.style.webkitTransform = 'translate(' + touchDelta + 'px,0)'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.report_footer {
  height: 40px;
  width: 100%;
  line-height: 40px;
  position: absolute;
  bottom: 10px;
  background-image: url(../assets/play.png);
  background-repeat: no-repeat;
  background-position: center;
}
</style>
