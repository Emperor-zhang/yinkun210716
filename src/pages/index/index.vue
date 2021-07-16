<template>
  <view class="container">
    <view class="user_info">
      <button type="primary" round @click="paymini">小程序支付</button>
      <button type="file" class="upfile" v-show="false" @click="upfiles">
        文件上传
      </button>
      <view class="table">
        <view class="table_item"> </view>
      </view>
    </view>
  </view>
</template>

<script>
var that;
export default {
  data() {
    return {};
  },
  onLoad() {},
  onShow() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 700rpx;
  position: relative;
  .title {
    width: 100%;
    height: 100rpx;
    text-align: center;
    line-height: 100rpx;
  }
  .user_info {
    width: 100%;
    height: 600rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
