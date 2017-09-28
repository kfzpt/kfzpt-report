<template>
  <div class="report_date">
    <div class="date_info" v-bind:class="{'big_date': date.flag == 1}" v-for="date in dates" track-by="$index">
      <div class="date_event" v-for="event in date.events">
        <li>{{event.title}}</li>
        <li>{{event.time}}</li>
        <img :src="event.img"></img>
        <li>{{event.describe}}</li>
      </div>
      <div class="date_num" v-bind:class="{'big_date': date.flag == 1}">
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
      dates: appData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.report_date {
  height: 500px;
  color: #FFFFFFFF;
}
.date_info {
  width: 37px;
  display: inline-block;
  float:left;
  height: 460px;
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
.big_date {
  background-color: red;
}
h1 {
  font-weight: normal;
}
</style>
