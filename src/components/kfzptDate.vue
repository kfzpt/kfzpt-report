<template>
  <div class="report_date" id="report_date" @mousedown="onmousedown" @mousemove="onmousemove" @mouseup="onmouseup">
    <div class="date_info" v-bind:class="{'big_info': date.flag == 1}" v-for="date in dates" track-by="$index">
      <div class="date_event" v-for="event in date.events"
           v-bind:class="{'pos_top': date.position == 1, 'pos_mid': date.position == 2, 'pos_bot': date.position == 3}">
        <span class="report_title">{{event.title}}</span>
        <span class="report_time">{{event.time}}</span>
        <img :src="event.img" class="report_img">
        <span class="report_desc">{{event.describe}}</span>
        <div class="report_more" @mouseenter="enter" @mouseleave="leave">
          <span>more</span>
        </div>
        <div class="bottomArrow"></div>
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
    height: 76%;
    color: #fff;
  }

  .date_info {
    width: 37px;
    display: inline-block;
    float: left;
    height: 100%;
    margin-left: 3px;
    position: relative;
  }

  .date_event {
    width: 210px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 4px 4px 10px rgba(145, 145, 145, 0.8);
    position: relative;
  }

  span {
    display: block;
  }

  img {
    display: block;
  }

  .report_title {
    padding: 6px 6px 0 6px;
    font-size: 22px;
    font-weight: bold;
    color: #333333;
    height: 26px;
    line-height: 26px;
    text-align: left;
    word-wrap: break-word;
  }

  .report_time {
    font-family: Times New Roman;
    font-size: 14px;
    color: #444;
    padding-left: 6px;
    padding-top: 3px;
    height: 18px;
    line-height: 18px;
    text-align: left;
    word-wrap: break-word;
  }

  .report_img {
    width: 200px;
    height: 142px;
    margin: auto;
  }

  .report_desc {
    font-family: Heiti SC;
    padding: 6px 6px 20px 6px;
    font-size: 16px;
    color: #333333;
    text-align: left;
    line-height: 18px;
    word-wrap: break-word;
  }

  .report_more {
    width: 57px;
    height: 18px;
    background-image: url(../assets/more02.png);
    background-repeat: no-repeat;
    margin-left: 70%;
    padding-bottom: 5px;
  }

  .report_more span {
    line-height: 18px;
    font-size: 11px;
    color: #fff;
    margin-left: -10px;
  }

  .report_more:hover {
    cursor: pointer;
    background-image: url(../assets/more01.png);
    background-repeat: no-repeat;
  }

  .pos_top {
    position: absolute;
    top: 0;
    left: -90px;
  }

  .pos_mid {
    position: absolute;
    top: 100px;
    left: -90px;
  }

  .pos_bot {
    position: absolute;
    top: 200px;
    left: -90px;
  }

  .date_num {
    text-align: center;
    color: black;
    position: absolute;
    bottom: 60px;
    width: 37px;
    height: 27px;
    line-height: 27px;
    word-wrap: break-word;
    background-color: rgba(200, 200, 200, 0.5);
  }

  .big_info {
    width: 50px;
    line-height: 37px;
  }

  .big_num {
    background-color: red;
    opacity: 0.8;
    width: 50px;
    height: 37px;
    line-height: 37px;
  }

  h1 {
    font-weight: normal;
  }

  .bottomArrow {
    border-top: 10px solid rgba(255, 255, 255, 0.5);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: 100px;
  }
</style>
