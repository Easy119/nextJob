<template>
  <div class="container">
    <!-- 轮播图加载 -->
    <swiper :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
      <swiper-item v-for="(item,index) in imgUrls" :key="index" style="height:400rpx;">
        <img :src="item" class="slide-image">
        <!-- <span  class="slide-image">{{item}}</span> -->
      </swiper-item>
    </swiper>
    <!-- 广告轮播 -->
    <van-notice-bar left-icon="/static/images/notice.png" :text="notice"></van-notice-bar>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  // 声明在当前组件下使用 counter-click 组件
  components: {},
  data() {
    return {
      notice:"ziinlife女神节开始啦，凡是今天在线购买吱音旗下任意产品,均可享受满3000减50的优惠活动,上不封顶,赶快参与吧",
      imgUrls: [
        "/static/images/1.jpg",
        "/static/images/2.jpg",
        "/static/images/3.jpg",
        "/static/images/4.jpg",
        "/static/images/5.jpg",
      ],
      circular:true,
      indicatorDots: false,
      autoplay: true,
      interval: 5000,
      duration: 1000
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
.navlink {
  text-decoration: underline;
}
.slide-image{
  width: 100%;
  height: 814rpx;
}
</style>