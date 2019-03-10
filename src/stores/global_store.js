import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    carCount: 0,
    ShopCar: [{
      "sku": 31391469607,
      "t": "戴尔（DELL）笔记本手提金属超极本女13.3英寸灵越5370系列轻薄便携商务办公学生游戏笔记本电脑 13.3英寸，金属超极本【俏皮粉】 【高配版】i5\/8G\/256G\/2G独显",
      "jp": "5499",
      "img": "http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/27879/15/9863/119394/5c82901cEfc51e1dc/5c2247ffaf8bcbd1.jpg",
      "clk": "http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC8zMTM5MTQ2OTYwNy5odG1s&log=NT3IJ-NnhTos1hLfKVpVkRK95mjmgN5C71pc6SNazdRvm4oNR2VK_i1Pj77D0PddjJAGo2R6oUQgWdsf3WWb8OM9PFaw3DH6BpaGMUnJL_NfwKnzL0fE0AMeHPysGy-HtlGhl8MqmlFgfyppS1ibljP5B2NGSGYl3WzwgZB7z8OnSrcoxfMPjcyTkoCn6CPHo3ktbTMQiso2bpUkrZzZVgVLHEmIwl5glLNWMao-b_vWcNUJ1EstdB8klpbQplB9H8_W79JGZqTeZz2rETn_K8LEpUGxKVRJaMdcwtRJ7QQvju8vbmhNlGeGKqPT04jAL5TMdvI1bvX9-HQWA8laSS4CJl93WnBeZ18-FD7-ZDITyNhDEIyDsVw3NQHkfv6lSd4KHieQlS9kFN4ynmb4-HTvJrXIXYvADQ7AWhH7TEbH9dVVkYKlreKvwkvE8nd63txKbPS-OoyyAIqYHXtwcQ&v=404",
      "source": "1",
      "num": 1
    },
    {
      "sku": 41983901809,
      "t": "【2条装】 女春秋款天鹅绒打底裤踩脚裤连裤显瘦 女黑色天鹅绒薄款打底裤 肤色+黑色 踩脚连脚随机",
      "jp": "12.9",
      "img": "http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/20149/31/7902/23921/5c6fca1dEdf72e00f/3db6de065722c5fb.jpg",
      "clk": "//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619128$src=rec$action=1$reqsig=a8357a4d8d6cd386facabe1afea124e7ff84cb80$enb=1$sku=0$p=619128$pin=$uuid=1757677530$csku=41983901809$index=0$st=0$adcli=$expid=100$mexpid=$im=$rid=4510085008496680967$ver=1$sig=cdc4ae71cb82948591249ecf7632992b988eaa16",
      "source": "0",
      "num": 1
    }]
  },
  mutations: {
    addShopCarNum: (state) => {
      state.carCount += 1
    },
    addShopCar: (state, data) => {
      state.ShopCar.push(data)
    },
    decShopCat: (state) => {
      state.carCount -= 1
    }
  }
})