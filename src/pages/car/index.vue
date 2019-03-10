<template>
  <div class="container">
    <!-- 商品列表 -->
    <ul>
      <li v-for="(item,index) in getShopCarContent" :key="index" class="car-item">
        <van-swipe-cell
          id="swipe-cell"
          right-width="65"
          async-close
          @close="onClose"
          style="background-color: red!important;"
        >
          <div class="de-swipe">
            <van-checkbox :value="item.checked_flag" @change="userSelect(index) " :name="index" class="car-item-check"></van-checkbox>
            <van-card :num="item.num" tag="热卖" :price="item.jp" :title="item.t" :thumb="item.img"></van-card>
          </div>
          <view slot="right" class="rightH">删除</view>
        </van-swipe-cell>
      </li>
    </ul>
    <!-- 底部导航 -->
    <div class="carFooter">
      <van-submit-bar
        :price="countMoney"
        button-text="提交订单"
        bind:submit="onClickButton"
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
    </div>
  </div>
</template>

<script>
import globalStore from "../../stores/global_store";
import Dialog from "../../../static/vant-weapp/dist/dialog/dialog";
export default {
  // 声明在当前组件下使用 counter-click 组件
  components: {},
  data() {
    return {
      checkedState: false,
      getShopCarContent: [],
      countMoney:4050
    };
  },
  created() {
    console.log(globalStore.state.ShopCar);
  },
  computed: {},
  methods: {
    onChange() {
      this.checkedState == true ? this.checkedState = false : this.checkedState = true;
    },
     userSelect(num) {
      this.getShopCarContent[num].checked_flag == true ? this.getShopCarContent[num].checked_flag = false : this.getShopCarContent[num].checked_flag = true;
      this.getShopCarContent.map((item,index)=>{
          index == num ? item.checked_flag = true : item.checked_flag = false;
          return item
      })
      console.log( this.getShopCarContent)
      // let obj = this.getShopCarContent[index];
      // this.$set(obj,"checkedState","checked");
      // console.log(this.getShopCarContent[index].checkedState)
    },
    getShopCar() {},
    onClose(event) {
      console.log(event);
      const { position, instance } = event.mp.detail;
      switch (position) {
        case "left":
        case "cell":
          instance.close();
          break;
        case "right":
          Dialog.confirm({
            message: "确定删除吗？"
          }).then(() => {
            instance.close();
          });
          break;
      }
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
      text:
        globalStore.state.carCount == 0
          ? ""
          : globalStore.state.carCount.toString()
    });
    this.getShopCarContent = globalStore.state.ShopCar.map(item=>{
      item.checked_flag = false;
      return item
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
.de-swipe{
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
  background-color: #f44;
}
#swipe-cell {
  background-color: red !important;
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