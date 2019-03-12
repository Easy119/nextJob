<template>
  <div class="container btns">
    <van-badge-group @change="onChange">
      <van-badge :title="item.title" v-for="(item,index) in badgeList" :key="index"/>
    </van-badge-group>
  </div>
</template>

<script>
import DataList from "../../../static/data.json";
export default {
  computed: {
    badgeList() {
      return DataList.kindList;
    }
  },
  data() {
    return {};
  },
  methods: {
    onChange(event) {
      wx.showToast({
        icon: "none",
        title: `切换至第${event.mp.detail}项`
      });
    }
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: "分类"
    });
  }
};
</script>

<style scoped>
</style>