<template>
  <view class="container">
    <view class="title">主标</view>
    <view class="time">2020-01-17</view>
    <view class="content">
      文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
      文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
      文章内容文章内容文章内容文章内容
      文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
      文章内容文章内容文章内容文章内容文章内容文章内容文章内容
    </view>
  </view>
</template>
<script>
var that;
export default {
  data() {
    return {};
  },
  onLoad(options) {
    that = this;
    uni.setNavigationBarTitle({
      title: options.title,
    });
  },
  onShow() {},
  components: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;
  padding: 0 30rpx;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  .title {
    font-size: 36rpx;
    margin-top: 20rpx;
  }
  .time {
    margin-top: 20rpx;
    font-size: 24rpx;
  }
  .content {
    font-size: 28rpx;
    line-height: 40rpx;
    margin-top: 50rpx;
  }
}
</style>
