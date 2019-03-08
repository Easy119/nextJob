<template>
  <div class="container">
    <picker @change="handlePickerChange" :value="selectedIndex" :range="messages">
      <view class="picker">当前消息：{{ messages[selectedIndex] }}</view>
    </picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      messages: ["Hello", "World", "Haha"]
    };
  },
  methods: {
    handlePickerChange(e) {
      console.log(e);
      this.selectedIndex = e.target.value
    }
  }
};
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>