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
    <van-notice-bar
      left-icon="https://www.ziinlife.com:8089/data/all_product/wx//images/notice.png"
      :text="notice"
    ></van-notice-bar>
    <!-- 首页分类 -->
    <div class>
      <swiper :duration="duration" style="background-color:#fff" indicator-dots="true">
        <swiper-item style="height:300rpx;">
          <ul class="kindPa">
            <li v-for="(item,index) in indexKinds.flool_1" :key="index">
              <img :src="item.src" alt class="kindImg">
              <span>{{item.title}}</span>
            </li>
          </ul>
        </swiper-item>
        <swiper-item style="height:300rpx;">
          <ul class="kindPa">
            <li v-for="(item,index) in indexKinds.flool_2" :key="index">
              <img :src="item.src" alt class="kindImg">
              <span>{{item.title}}</span>
            </li>
          </ul>
        </swiper-item>
      </swiper>
    </div>
    <!-- 首页广告 -->
    <div class="ads">
      <img src="https://www.ziinlife.com:8089/data/all_product/wx/images/index/ads.gif" alt>
    </div>
    <!-- 首页拼团 -->
    <div class="Patchwork">
      <p>京东拼团</p>
      <scroll-view class="scroll-view_H" scroll-x="true" style="width: 100%">
        <view class="scroll-view-item" v-for="(item,index) in indexKinds.Patchwork" :key="index">
          <img :src="item.src" alt>
          <span class="newPrice">￥ {{item.price}}</span>
          <span class="underLineP">￥ {{item.underLinP}}</span>
        </view>
      </scroll-view>
    </div>
    <!-- 猜你喜欢 -->
    <div class="recommend">
      <p>为您推荐</p>
      <ul class="product">
        <li v-for="(item,index) in indexKinds.like_all" :key="index" class="product-item">
          <a :href="'/pages/detail/main?id='+index">
            <img :src="item.img" alt>
            <span class="des">{{item.t}}</span>
            <span class="price">￥ {{item.jp}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
import DataList from "../../../static/data.json";
import globalStore from "../../stores/global_store";
export default {
  // 声明在当前组件下使用 counter-click 组件
  components: {},
  data() {
    return {
      notice:
        "ziinlife女神节开始啦，凡是今天在线购买吱音旗下任意产品,均可享受满3000减50的优惠活动,上不封顶,赶快参与吧",
      imgUrls: [
        "https://www.ziinlife.com:8089/data/all_product/wx/images/1.jpg",
        "https://www.ziinlife.com:8089/data/all_product/wx/images/2.jpg",
        "https://www.ziinlife.com:8089/data/all_product/wx/images/3.jpg",
        "https://www.ziinlife.com:8089/data/all_product/wx/images/4.jpg",
        "https://www.ziinlife.com:8089/data/all_product/wx/images/5.jpg"
      ],
      indexKinds: {},
      circular: true,
      indicatorDots: false,
      autoplay: true,
      interval: 5000,
      duration: 1000
    };
  },
  computed: {
    carShopNumber(){
      console.log(globalStore.state.carCount)
      return globalStore.state.carCount == 0 ? "" : globalStore.state.carCount;
    }
  },
  created() {
    this.indexKinds = DataList;
  },
  methods: {},
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "首页"
    });
    wx.setTabBarBadge({
      index: 2,
      text: this.carShopNumber.toString()
    });
  },
  onShow(){
     wx.setTabBarBadge({
      index: 2,
      text: this.carShopNumber.toString()
    });
  }
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
.slide-image {
  width: 100%;
  height: 814rpx;
}
/* 首页分类图片 */
.kindPa {
  width: 100%;
  height: 300rpx;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #fff;
}
ul.kindPa li {
  width: 20%;
  height: 140rpx;
  padding: 10rpx;
  box-sizing: border-box;
}
ul.kindPa li span {
  font: 12px/60rpx "微软雅黑";
  text-align: center;
  width: 80rpx;
  margin: 0 auto;
  display: block;
}
img.kindImg {
  display: block;
  width: 80rpx;
  height: 80rpx;
  margin: 0 auto;
}
/* 广告 */
.ads {
  width: 100%;
  height: 170rpx;
  padding: 30rpx 0 15rpx;
  background-color: #ffffff;
}
.ads img {
  display: block;
  width: 100%;
  height: 170rpx;
}
/* 首页拼团 */
.Patchwork p {
  width: 100%;
  height: 70rpx;
  line-height: 70rpx;
  font-size: 14px;
  color: #000;
  font-weight: bolder;
  text-indent: 1em;
}
.scroll-view_H {
  width: 100%;
  height: 252rpx;
  white-space: nowrap;
  display: flex;
  background-color: #fff;
}
.scroll-view-item {
  width: 25%;
  height: 252rpx;
  display: inline-block;
}
.scroll-view-item img {
  display: block;
  width: 140rpx;
  height: 140rpx;
  margin: 15rpx auto;
}
.scroll-view-item .newPrice {
  font-size: 14px;
  line-height: 32rpx;
  width: 100%;
  text-align: center;
  display: block;
  height: 32rpx;
  color: red;
}
.scroll-view-item .underLineP {
  font-size: 10px;
  line-height: 26rpx;
  width: 100%;
  text-align: center;
  display: block;
  height: 26rpx;
  text-decoration: line-through;
}
/* 推荐 */
.recommend p {
  width: 100%;
  height: 70rpx;
  line-height: 70rpx;
  font-size: 14px;
  color: #000;
  font-weight: bolder;
  text-indent: 1em;
}
.product {
  width: 100%;
}
.product-item {
  width: 50%;
  height: 430rpx;
  float: left;
  background-color: #fff;
  padding: 0 20rpx;
  box-sizing: border-box;
  border-bottom: 1rpx solid #cdcdcd;
  border-right: 1rpx solid #cdcdcd;
}
.product-item img {
  display: block;
  width: 280rpx;
  height: 280rpx;
  margin: 15rpx auto;
}
.product-item .des {
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  color: #000;
  line-height: 30rpx;
  height: 60rpx;
  width: 100%;
  display: block;
}
.product-item .price {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  color: red;
  line-height: 60rpx;
  height: 60rpx;
  width: 100%;
  display: block;
}
</style>