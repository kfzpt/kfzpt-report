<template>
  <div class="more_data">
    <div class="more-box">
      <div class="more-header">开发者平台部<span class="more-close" @click="closeMore">X</span></div>
      <div class="more-contain">
        <span class="more-title" v-show="appList.title != null && appList.title != ''">{{ appList.title }}</span>
        <span class="more-time" v-show="appList.time != null && appList.time != ''">{{ appList.time }}</span>
        <img :src="appList.img" class="more-img" v-show="appList.img != null && appList.img != ''" @click="makeFull">
        <li class="more-content" v-for="content in appList.contents">{{content}}</li>
      </div>
    </div>
    <div class="isFull" v-if="isFull" @click="makeFull">
      <img :src="appList.img" class="fullScreen" v-show="appList.img != null && appList.img != ''">
    </div>
  </div>
</template>

<script>
  import moreData from '../json/more.json'
  export default {
    name: 'report_more',
    data () {
      return {
        msg: '开发者平台部 Q3 汇报',
        moreIndex: 0,
        moreData: moreData,
        isFull: false,
        appList: {}
      }
    },
    props: ['sequence'],
    created () {
      for (let i = 0; i < moreData.length; i++) {
        if (moreData[i].index === this.sequence) {
          this.moreIndex = i
          break
        }
      }
      this.appList = moreData[this.moreIndex]
      console.log(this.appList)
    },
    methods: {
      closeMore () {
        this.$emit('close')
      },
      makeFull () {
        this.isFull = !this.isFull
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import url("../assets/css/swiper-3.4.2.min.css");*/

  span {
    display: block;
  }

  .more_data {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: -124px;
    left: 0;
    z-index: 999;
  }

  .more-box {
    width: 75%;
    height: 70%;
    float: left;
    border: 3px solid #ccc;
    border-radius: 5px;
    margin-top: 10%;
    margin-left: 12.5%;
    position: relative;
    overflow: hidden;
    display: block !important;
  }

  #next {
    position: absolute;
    right:0;
    display: inline-block;
    height: 30%;

  }

  .more-header {
    width: 100%;
    height: 34px;
    line-height: 34px;
    background-color: #333;
    border: 1px solid #555;
    text-align: center;
    color: #fff;
    font-size: 18px;
  }

  .more-close {
    width: 15px;
    color: #ccc;
    font-size: 15px;
    float: right;
    text-align: right;
    margin-right: 10px;
    cursor: pointer;
  }

  .more-contain {
    width: 98%;
    height: 89% !important;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 12px;
  }

  .more-time {
    width: 40%;
    color: #fff;
    font-size: 14px;
    text-align: right;
    /*padding-left: 10px;*/
    padding-bottom: 10px;
    font-family: Times New Roman;
    display: inline-block;
  }

  .more-title {
    width: 57%;
    font-family: Heiti SC;
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    text-align: left;
    padding-bottom: 10px;
    display: inline-block;
  }

  .more-img {
    display: inline-block;
    width: 48%;
    float: left;
    padding-right: 15px;
    cursor: pointer;
  }

  .more-content {
    width: 50%;
    display: inline-block;
    font-family: Arial;
    word-wrap: break-word;
    font-size: 18px;
    color: #fff;
    float: left;
    text-align: left;
  }
  .isFull {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .fullScreen {
    cursor: pointer;
    height: 100%;
    display: block;
    margin: auto;
  }
</style>
