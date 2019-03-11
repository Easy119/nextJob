<template>
  <div class="order">
    <!-- 收货地址选择 -->
    <div class="address">
      <img src="https://www.ziinlife.com:8089/data/all_product/wx/images/user/10.png" alt>
      <p>选择收货地址</p>
      <van-icon name="arrow" class="arrow"/>
    </div>
    <!-- 产品展示 -->
    <div class="orderList">
      <ul>
        <li v-for="(item,index) in shopCar" :key="index">
          <van-card :num="item.num" :price="item.jp" :title="item.t" :thumb="item.img"></van-card>
        </li>
      </ul>
    </div>
    <!--  -->
    <div>
      <van-cell-group>
        <van-cell title="支付方式" value="微信" is-link/>
        <van-cell title="优惠券" value="无" is-link/>
        <van-cell title="商品金额" :value="allCount" value-class="font_color"/>
        <van-cell title="配送费" value="￥0.00"/>
      </van-cell-group>
    </div>
    <!-- footer -->
    <footer class="footer">
      <van-submit-bar price="100" button-text="提交订单" @submit="onSubmit" ></van-submit-bar>
    </footer>
  </div>
</template>

<script>
import globalStore from "../../stores/global_store";
export default {
  data() {
    return {};
  },
  computed: {
    shopCar() {
      return globalStore.state.orderList;
    },
    allCount() {
      let countMoneyAll = this.shopCar.reduce((total, item) => {
        if (item.checked_flag) {
          return total + Number(item.jp) * Number(item.num);
        } else {
          return total + 0;
        }
      }, 0);
      return `￥ ${countMoneyAll}`;
    }
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: "填写订单"
    });
  }
};
</script>

<style scoped>
.order {
  width: 100%;
  background-color: #f7f5f8;
}
.orderList {
  width: 100%;
  min-height: 120rpx;
  background-color: #fff;
}
.orderList ul li {
  border-bottom: 1rpx dotted gray;
}
.address {
  width: 100%;
  height: 120rpx;
  padding: 10rpx;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1rpx dotted gray;
  background-color: #fff;
  margin: 15rpx 0;
  display: flex;
  align-items: center;
}
.address img {
  display: block;
  width: 70rpx;
  height: 70rpx;
  float: left;
}
.address p {
  display: block;
  min-width: 80rpx;
  height: 100rpx;
  font-size: 14px;
  line-height: 100rpx;
  float: left;
  margin-left: 30rpx;
}
.address .arrow {
  position: absolute;
  right: 40rpx;
  top: 35rpx;
}
/*  */
.font_color {
  color: red !important;
}
/* footer */
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 11;
}
</style>