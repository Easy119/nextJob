<template>
  <div class="container btns">
    <div class="info">
      <img :src="prodcutContent.img" alt="">
      <p class="pTitle">{{prodcutContent.t}}</p>
      <p class="price">￥ {{prodcutContent.jp}}</p>
    </div>
    <div class="carFooter">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon"/>
        <van-goods-action-icon icon="cart-o" text="购物车" @click="toShopCar" :info="carShopNum"/>
        <van-goods-action-button text="加入购物车" type="warning" @click="addShopCar"/>
        <van-goods-action-button text="立即购买" @click="onClickButton"/>
      </van-goods-action>
    </div>
    <!-- toast -->
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import DataList from "../../../static/data.json";
import globalStore from "../../stores/global_store";
import Toast from '../../../static/vant-weapp/dist/toast/toast';
export default {
  computed: {},
  data() {
    return {
      prodcutContent:{}
    }
  },
  computed:{
    carShopNum(){
      return globalStore.state.carCount == 0 ? "" : globalStore.state.carCount
    }
  },
  methods: {
    addShopCar(){
      // 差一步业务逻辑 关于 显示数据
      globalStore.commit("addShopCarNum");
      globalStore.commit("addShopCar",this.prodcutContent);
      Toast.success('添加成功');
    },
    toShopCar(){
      wx.switchTab({
        url:"../../pages/car/main"
      })
    }
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: "商品详情"
    });
    // 获取参数Id
    let query = this.$root.$mp.query.id;
    this.prodcutContent =  DataList.like_all[query];
  }
};
</script>

<style scoped>
/* 详情 */
.info{
  width: 100%;
  background-color: #fff;
}
.info img{
  display: block;
  width: 640rpx;
  height: 480rpx;
  margin: 30rpx auto;
}
.info .pTitle{
  font-size: 13px;
  line-height: 30rpx;
  padding: 0 20rpx 0 10rpx;
  margin-bottom: 20rpx;;
}
.info .price{
  font-size: 14px;
  line-height: 40rpx;
  color: red;
  padding-left: 10rpx;
}
/* 底部导航 */
.carFooter{
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 12;
  width: 100%;
}
</style>