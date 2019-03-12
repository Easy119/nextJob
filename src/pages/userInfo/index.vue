<template>
  <div>
    <!-- 用户头像信息 -->
    <header class="userInfo">
      <open-data type="userAvatarUrl" class="open-data-class"></open-data>
      <open-data type="userNickName" class="userNickName"></open-data>
    </header>
    <!-- 用户订单管理 -->
    <div>
      <div class="my_order">
          
      </div>
      <div>
        <!-- 查看订单 -->
          <ul class="userShop">
            <li v-for="(item,index) in aboutOrder" :key="index">
              <img :src="item.src" alt="">
              <p>{{item.title}}</p>
              </li>
          </ul>
      </div>
    </div>
    <!-- 分类信息 -->
    <div>
      <ul>
        <li class="userSet"><img src="https://www.ziinlife.com:8089/data/all_product/wx/images/user/5.png" alt=""> <span>我的优惠券</span><van-icon name="arrow"  class="arrow"/></li>
        <li class="userSet"><img src="https://www.ziinlife.com:8089/data/all_product/wx/images/user/6.png" alt=""> <span>我的收货地址</span><van-icon name="arrow"  class="arrow"/></li>
        <li class="userSet"><img src="https://www.ziinlife.com:8089/data/all_product/wx/images/user/7.png" alt=""> <span>联系客服</span><van-icon name="arrow"  class="arrow"/></li>
        <li class="userSet"><img src="https://www.ziinlife.com:8089/data/all_product/wx/images/user/8.png" alt=""> <span>意见反馈</span><van-icon name="arrow"  class="arrow"/></li>
        <li class="userSet"><img src="https://www.ziinlife.com:8089/data/all_product/wx/images/user/9.png" alt=""> <span>我的App</span><van-icon name="arrow"  class="arrow"/></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        aboutOrder:[{
          src:"https://www.ziinlife.com:8089/data/all_product/wx/images/user/1.png",
          title:"待支付"
        },{
          src:"https://www.ziinlife.com:8089/data/all_product/wx/images/user/2.png",
          title:"待收货"
        },{
          src:"https://www.ziinlife.com:8089/data/all_product/wx/images/user/3.png",
          title:"待评价"
        },{
          src:"https://www.ziinlife.com:8089/data/all_product/wx/images/user/4.png",
          title:"售后/退货"
        }]
    };
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: "我的"
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#3CB371',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })

   
  }
};
</script>

<style scoped>
.userInfo{
  width: 100%;
  height: 200rpx;
  background-color:	#3CB371 ;
  padding: 40rpx ;
  box-sizing: border-box;
}
.open-data-class {
  width: 120rpx;
  height: 120rpx; 
  display:block; 
  overflow:hidden; 
  border-radius: 50%;
  float: left;
}
.userInfo .userNickName{
  display: block;
  min-width: 120rpx;
  height: 120rpx;;
  font-size: 12px;
  float: left;
  margin-left: 30rpx;;
  color: #ffffff;
  margin-top: 20rpx;;
}
/*  */
.userShop{
  width: 100%;
  height: 150rpx;
  display: flex;
  justify-content: space-around;
}
ul.userShop li{
  width: 20%;
  height: 150rpx;
}
ul.userShop li img{
  display: block;
  width: 70rpx;
  height: 70rpx;
  margin: 10rpx auto;
}
ul.userShop li p{
  width: 100%;
  height: 70rpx;
  font-size: 12px;
  text-align: center;
  line-height: 50rpx;
}
/* userSet */
.userSet {
  width: 100%;
  height: 100rpx;
  border-bottom: 1rpx solid #ccddcc;
  display: flex;
  align-items: center;
  padding:0 20rpx;
  box-sizing: border-box; 
  position: relative;
  overflow: hidden;
}
.userSet img{
  display: block;
  width:50rpx;
  height:50rpx;
  float: left;
}
.userSet span{
  display: block;
  min-width: 80rpx;
  height: 100rpx;
  text-align: left;
  margin-left: 10rpx;;
  float: left;
  font-size: 14px;
  line-height: 100rpx;
  color: #000;
}
.userSet .arrow{
  display: block;
  position: absolute;
  right: 20rpx;
  top: 30rpx;
}
</style>