import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    carCount: 0,
    orderList:[],
    ShopCar: []
  },
  mutations: {
    addOrderList(state,opts){
      state.orderList = opts
    },
    addShopCarNum: (state) => {
      state.carCount += 1
    },
    addShopCar: (state, item) => { // 前端传的数据 vuex 不能修改
      item.checked_flag = false;
      if (state.ShopCar.indexOf(item) != -1) {
        let sku_index = state.ShopCar.indexOf(item);
        state.ShopCar[sku_index].num +=1;
      } else {
        item.num = 1;
        state.ShopCar.push(item);
      }
    },
    delShop(state, id) {
      state.ShopCar = state.ShopCar.filter(item => {
        if (id != item.sku) {
          return item
        } else {
          state.carCount -= item.num
        }
      })
    },
    delShopCat: (state, num) => {
      state.carCount -= num
    }
  }
})
