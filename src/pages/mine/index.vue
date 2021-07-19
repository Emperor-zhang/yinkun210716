<template>
  <view class="container">
    <view class="header">
      <image
        class="nickUrl"
        :src="nickUrl"
        mode="widthFix"
        @click="handle"
      ></image>
      <view class="loginTip" @click="handle">{{ nickName }}</view>
    </view>
    <view class="img_list">
      <image
        src="../../static/styles/icon/1.png"
        class="img_item img_item1"
        mode="widthFix"
      ></image>
      <image
        src="../../static/styles/icon/2.png"
        class="img_item img_item2"
        mode="widthFix"
      ></image>
      <image
        src="../../static/styles/icon/3.png"
        class="img_item img_item3"
        mode="widthFix"
      ></image>
    </view>
  </view>
</template>

<script>
var that;
export default {
  data() {
    return {
      logined: 0,
      nickName: "登录/注册",
      nickUrl: "../../static/styles/icon/login.svg",
    };
  },
  onLoad() {
    that = this;
    that.logined = uni.getStorageSync("logined");
    if (that.logined == 1) {
      that.nickName = uni.getStorageSync("nickname");
      that.nickUrl = uni.getStorageSync("nickurl");
    }
  },
  onShow() {},
  methods: {
    handle() {
      console.log(that.logined);
      if (that.logined === 0 || !that.logined) {
        uni.navigateTo({
          url: "/pages/login/index",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  position: relative;
  .header {
    width: 680rpx;
    height: 150rpx;
    box-shadow: 0rpx 0rpx 30rpx 12rpx #eee;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    font-size: 30rpx;
    .nickUrl {
      width: 80rpx;
      margin-left: 30rpx;
    }
    .loginTip {
      margin-left: 20rpx;
      font-weight: 600;
    }
  }
  .img_list {
    width: 680rpx;
    height: 150rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10rpx;
    .img_item {
      width: 220rpx;
    }
  }
}
</style>
