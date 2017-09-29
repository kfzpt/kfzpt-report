<template>
  <div class="box">
    <div class="report_date" id="report_date" @mousedown="onmousedown" @mousemove="onmousemove" @mouseup="onmouseup">
      <div class="date_info" v-bind:class="{'big_info': date.flag == 1}" v-for="date in dates" track-by="$index">
        <div class="date_event" v-for="event in date.events"
             v-bind:class="{'pos_0': event.position == 0, 'pos_1': event.position == 1, 'pos_2': event.position == 2, 'pos_3': event.position == 3, 'pos_4': event.position == 4, 'pos_5': event.position == 5, 'pos_6': event.position == 6}">
          <span class="report_title" v-show="event.title != null && event.title != ''">{{event.title}}</span>
          <span class="report_time" v-show="event.time != null && event.time != ''">{{event.time}}</span>
          <img :src="event.img" v-bind:class="{'img_left': event.format == 1, 'img_left_thin': event.format == 2}" v-show="event.img != null && event.img != ''" class="report_img">
          <li class="report_desc" v-for="describe in event.describes">{{describe}}</li>
          <div class="report_more">
            <span>more</span>
          </div>
          <div class="bottomArrow"></div>
        </div>
        <div class="date_num" v-bind:class="{'big_num': date.flag == 1}">
          <span>{{date.text}}</span>
        </div>
      </div>
    </div>
    <kfzptMore @close="closeMore" v-if="showMore"></kfzptMore>
  </div>
</template>

<script>
  import kfzptMore from './kfzptMore'

  var appData = require('../json/date.json')
  export default {
    name: 'report_date',
    components: {
      kfzptMore: kfzptMore
    },
    data () {
      return {
        showMore: false,
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
      openMore () {
        this.showMore = true
      },
      closeMore () {
        this.showMore = false
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
  .box {
    width: 100%;
    height: 760px;
    position: relative;
  }
  .report_date {
    width: 8000px;
    height: 76%;
    color: #fff;
  }

  .date_info {
    width: 50px;
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
    height: 100%;
    margin: auto;
  }

  .img_left {
    float:left;    
    top: 0;
    width: 200px;
    margin: 5px;
  }

  .img_left_thin {
    float:left;    
    top: 0;
    width: 150px;
    margin: 5px;
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

  .pos_0 {
    position: absolute;
    top: 0;
    width: 380px;
  }

  .pos_1 {
    position: absolute;
    top: 50px;
    width: 200px;
  }

  .pos_2 {
    position: absolute;
    top: 250px;
    width: 320px;
  }

  .pos_3 {
    position: absolute;
    top: 0;
    width: 450px;
  }

  .pos_4 {
    position: absolute;
    top: 50px;
    width: 450px;
  }

  .pos_5 {
    position: absolute;
    top: 300px;
    width: 450px;
  }

  .pos_6 {
    position: absolute;
    top: 0;
    width: 320px;
  }

  .date_num {
    text-align: center;
    color: black;
    position: absolute;
    bottom: 5px;
    width: 50px;
    height: 27px;
    line-height: 27px;
    word-wrap: break-word;
    background-color: rgba(200, 200, 200, 0.5);
  }

  .big_info {
    width: 70px;
    line-height: 37px;
  }

  .big_num {
    background-color: red;
    opacity: 0.8;
    width: 70px;
    height: 37px;
    line-height: 37px;
  }

  h1 {
    font-weight: normal;
  }

  li {
    font-weight: normal;
    padding-bottom: 6px !important;
    list-style-type:none;
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
