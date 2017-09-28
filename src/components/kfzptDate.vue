<template>
  <div class="report_date" id="report_date" @mousedown="onmousedown" @mousemove="onmousemove" @mouseup="onmouseup">
    <div class="date_info" v-bind:class="{'big_info': date.flag == 1}" v-for="date in dates" track-by="$index">
      <div class="date_event" v-for="event in date.events">
        <li>{{event.title}}</li>
        <li>{{event.time}}</li>
        <img :src="event.img"></img>
        <li>{{event.describe}}</li>
      </div>
      <div class="date_num" v-bind:class="{'big_num': date.flag == 1}">
        <span>{{date.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
var appData = require('../json/date.json')
export default {
  name: 'report_date',
  data () {
    return {
      dates: appData,
      startMove: 0,
      startX: 0,
      startTranslate: 0
    }
  },
  methods: {
    onmousedown (event) {
      event = window.event || event
      this.startMove = 1
      this.startX = event.clientX
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
    },
    onmousemove (event) {
      if (this.startMove === 0) {
        return
      }
      event = window.event || event
      var distanceX = event.clientX - this.startX
      event.preventDefault()
      this.setTitleTransform(distanceX)
    },
    onmouseup (event) {
      this.startMove = 0
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
.report_date {
  width: 8000px;
  height: 580px;
  color: #FFFFFFFF;
}
.date_info {
  width: 37px;
  display: inline-block;
  float:left;
  height: 570px;
  margin-left: 3px;
}
.date_event {
  background-color: gray;
  width: 150px;
}
.date_num {
  text-align: center;
  color: black;
  position: absolute;
  bottom: 0;
  background-color: #FFFFFFFF;
  width: 37px;
  height: 27px;
  font-family: Arial;
  text-align: left;
  word-wrap: break-word;
}
.big_info {
  width: 47px;
  height: 37px;
}
.big_num {
  background-color: red;
  width: 47px;
  height: 37px;
}
h1 {
  font-weight: normal;
}
</style>
