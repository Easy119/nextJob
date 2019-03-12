<template>
  <div class="container">
    <!-- 商品列表 -->
    <ul>
      <li v-for="(item,index) in getShopCarContent" :key="index" class="car-item">
        <van-swipe-cell
          :id= "item.sku"
          right-width="65"
          async-close
          @close="onClose"
        >
          <div class="de-swipe">
            <van-checkbox
              :value="item.checked_flag"
              @change="userSelect(index) "
              :name="index"
              class="car-item-check"
            ></van-checkbox>
            <van-card :num="item.num" tag="热卖" :price="item.jp" :title="item.t" :thumb="item.img"></van-card>
          </div>
          <view slot="right" class="rightH">删除</view>
        </van-swipe-cell>
      </li>
    </ul>
    <!-- 没有商品的友情提示 -->
    <div class="no_goods" v-if="getShopCarContent.length == 0">
      <img src="../../../static/imgage/car.png" alt="">
      <p>购物车空空如也，去逛逛吧~</p>
    </div>
    <!-- 底部导航 -->
    <div class="carFooter" v-if="getShopCarContent.length != 0">
      <van-submit-bar
        :price="countMoney"
        button-text="提交订单"
        @submit="submitOrder"
        :tip="true"
      >
        <!-- <van-tag type="primary">标签</van-tag> -->
        <van-checkbox :value="checkedState" @change="allChange">全选</van-checkbox>
        <!-- <view slot="tip">您的收货地址不支持同城送,
          <text>修改地址</text>
        </view>-->
      </van-submit-bar>
      <!-- 消息提示 -->
      <van-dialog id="van-dialog"/>
      <van-toast id="van-toast" />
    </div>
  </div>
</template>

<script>
import globalStore from "../../stores/global_store";
import Toast from '../../../static/vant-weapp/dist/toast/toast';
import Dialog from "../../../static/vant-weapp/dist/dialog/dialog";
export default {
  // 声明在当前组件下使用 counter-click 组件
  components: {},
  data() {
    return {
      checkedState: false,
      countMoney: 0
    };
  },
  created() {
    console.log(globalStore.state.ShopCar);
  },
  computed: {
    getShopCarContent() { // 获取购物车产品数量
      return   globalStore.state.ShopCar
    },
    carItemNumber(){ //购物车的显示
      return globalStore.state.carCount == 0 ? "" : globalStore.state.carCount.toString()
    }
  },
  methods: {
    userSelect(num) {
      this.getShopCarContent[num].checked_flag == true
        ? (this.getShopCarContent[num].checked_flag = false)
        : (this.getShopCarContent[num].checked_flag = true);
      this.is_all_checked();
      this.getMoneyAll();
      this.$forceUpdate(); // 牛逼的不行啊 强制渲染
    },
    getMoneyAll() {
      let countMoneyAll = this.getShopCarContent.reduce((total, item) => {
        if (item.checked_flag) {
          return total + Number(item.jp) * Number(item.num);
        } else {
          return total + 0;
        }
      }, 0);
      this.countMoney = countMoneyAll * 100;
    },
    allChange() {
      // 全选
      if (this.checkedState) {
        this.checkedState = false;
        this.getShopCarContent.forEach(item => (item.checked_flag = false));
        this.getMoneyAll(); //算总计金额
      } else {
        this.checkedState = true;
        this.getShopCarContent.forEach(item => (item.checked_flag = true));
        this.getMoneyAll(); //算总计金额
      }
    },
    is_all_checked() { // 判断是不是全选
      // 获取 全部checked的 checked_flag的值
      let checked_flag_true = this.getShopCarContent.reduce((count, item) => {
        return count + Number(item.checked_flag);
      }, 0);
      // 获取 购物车产品种类
      let getShopCar_length = this.getShopCarContent.length;
      this.checkedState = checked_flag_true == getShopCar_length;
    },
    getShopCar() {

    },
    onClose(event) {
      const { position, instance } = event.mp.detail;
      const { id } = event.mp.target;
      switch (position) {
        case "left":
        case "cell":
          instance.close();
          break;
        case "right":
          Dialog.confirm({
            message: "确定删除吗？"
          }).then((res) => {
            this.deleteShopCar(id)
          });
          break;
      }
    },
    submitOrder(){
      let newArr =  this.getShopCarContent.filter((item) => {
          if(item.checked_flag){
           return item
          }
      });
      if(newArr.length > 0){
        globalStore.commit("addOrderList",newArr) // 绑定 订单信息
         wx.navigateTo({
          url:"../../pages/order/main"
        })
      } else {
        Toast.fail("没有可以提交的订单");
      }
    },
    deleteShopCar(id){
      // 修改vuex数据
      globalStore.commit("delShop",id)
    }
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: "购物车"
    });
  },
  onShow() {
    wx.setTabBarBadge({
      index: 2,
      text:this.carItemNumber
    });
    this.getShopCarContent.forEach((item) => {
        item.checked_flag = false
    });
    this.checkedState = false;
  },
  updated () { // 用于更新tabber上面的 购物车数量显示
    wx.setTabBarBadge({
      index: 2,
      text:this.carItemNumber
    });
  }
};
</script>

<style scoped>
/* 购物车 */
.car-item {
  width: 100%;
  height: 230rpx;
  background-color: #fafafa;
}
.de-swipe {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 15rpx;
}
.rightH {
  color: #fff;
  font-size: 15px;
  width: 65px;
  height: 230rpx;
  display: inline-block;
  text-align: center;
  line-height: 230rpx;
  background-color: red;
}
#swipe-cell {
  background-color: red !important;
}
/* no_goods */
.no_goods{
  height: 360rpx;;
  width: 100%;
  padding: 60rpx 0;
  box-sizing: border-box;
  background-color: #fff;
  margin: 100rpx 0;
}
.no_goods img{
  display: block;
  width: 180rpx;
  height: 180rpx;
  margin: 0 auto;
}
.no_goods p{
  font-size: 14px;
  line-height: 28rpx;
  text-align: center;
  margin-top: 60rpx;
}
/* 底部导航 */
.carFooter {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 12;
  width: 100%;
}
</style>