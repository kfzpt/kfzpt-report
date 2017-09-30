<template>
  <div class="more_data swiper-container">
    <div class="swiper-wrapper">
      <div class="more-box swiper-slide" v-for="item in moreList">
        <div class="more-header">
          <span class="more-time" v-show="item.time != null && item.time != ''">{{ item.time }}</span>
          <span class="department">开发者平台部</span>
          <span class="more-del" @click="delMore">X</span>
        </div>
        <div class="more-contain">
          <span class="more-title" v-show="item.title != null && item.title != ''">{{ item.title }}</span>
          <img :src="item.img" class="more-img" v-show="item.img != null && item.img != ''">
          <div class="more-content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from '../js/swiper-3.4.2.min.js'
  import appData from '../json/appDetail'
  export default {
    name: 'report_more',
    data () {
      return {
        msg: '开发者平台部 Q3 汇报',
        moreList: {}
      }
    },
    props: ['sequence'],
    created () {
      this.moreList = appData[this.sequence].more
      console.log('dd', this.moreList)
      this.swipers()
    },
    mounted () {

    },
    methods: {
      delMore () {
        this.$emit('close')
      },
      swipers () {
        let mySwiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          loop: true,

          // 如果需要分页器
          pagination: '.swiper-pagination',

          // 如果需要前进后退按钮
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',

          // 如果需要滚动条
          scrollbar: '.swiper-scrollbar'
        })
        console.log(mySwiper)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("../assets/css/swiper-3.4.2.min.css");

  .more_data {
    width: 100%;
    height: 760px;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: -124px;
    left: 0;
    z-index: 999;
  }

  .more-box {
    width: 75%;
    height: 70%;
    border: 3px solid #ccc;
    border-radius: 5px;
    margin-top: 10%;
    margin-left: 12.5%;
    position: relative;
    overflow: hidden;
  }

  .more-header {
    width: 100%;
    height: 34px;
    line-height: 34px;
    background-color: #333;
    border: 1px solid #555;
  }

  .more-time {
    width: 40%;
    color: #fff;
    font-size: 14px;
    float: left;
    text-align: left;
    padding-left: 10px;
    font-family: Times New Roman;
  }

  .department {
    width: 40%;
    color: #fff;
    font-size: 18px;
    float: left;
    text-align: left;
    padding-left: 10px;
  }

  .more-del {
    width: 16%;
    color: #ccc;
    font-size: 15px;
    float: left;
    text-align: right;
    padding-right: 10px;
    cursor: pointer;
  }

  .more-contain {
    height: 87.7%;
    margin: 0;
    background-color: #000;
    padding: 15px;
  }

  .more-title {
    width: 100%;
    font-family: Heiti SC;
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    text-align: left;
    padding-bottom: 10px;
  }

  .more-img {
    display: inline-block;
    width: 48%;
    float: left;
    padding-right: 15px;
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

  span {
    display: block;
  }
</style>
