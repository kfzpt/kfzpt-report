<template>
  <div class="more_data">
    <div class="more-box" v-for="item in moreList">
      <div class="more-header">
        <span class="more-time">{{ item.time }}</span>
        <span class="department">开发者平台部</span>
        <span class="more-del" @click="delMore">X</span>
      </div>
      <div class="more-contain">
        <span class="more-title">{{ item.title }}</span>
        <img :src="item.img" class="more-img" v-if="item.img">
        <div class="more-content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  var moreData = require('../json/more.json')
  export default {
    name: 'report_more',
    data () {
      return {
        msg: '开发者平台部 Q3 汇报',
        moreList: moreData
      }
    },
    methods: {
      delMore () {
        this.$emit('close')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
