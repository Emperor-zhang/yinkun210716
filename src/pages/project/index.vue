<template>
  <view class="container">
    <block v-for="(item, index) in 5" :key="index">
      <view class="content">
        <view class="item_header">
          <view class="title">江苏省中小型科技企业（科小）</view>
          <view class="state">进行中</view>
        </view>
        <view class="item_footer">
          <view class="name"
            >业务名称:双软（江苏省软件产品/软件企业标准服务）</view
          >
          <view class="year">申报年份:2021</view>
          <view class="crew">商务人员:小明</view>
          <view class="date">交接时间:2021-07-16</view>
          <view class="details">
            <view @click="handleDetails">查看详情</view>
          </view>
        </view>
      </view>
    </block>
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
  methods: {
    handleDetails() {
      uni.navigateTo({
        url: "/pages/project/projectdetails/index",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 730rpx;
  position: relative;
  margin-left: 10rpx;
  .content {
    width: 100%;
    height: 400rpx;
    padding: 0 10rpx;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: 0rpx 0rpx 16rpx 6rpx #ccc;
    color: rgb(99, 99, 99);
    margin: 40rpx 0;
    .item_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 80rpx;
      border-bottom: 1px solid rgb(202, 202, 202);
      .title {
        width: 560rpx;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .state {
        color: rgb(130, 176, 245);
      }
    }
    .item_footer {
      color: rgb(148, 148, 148);
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      height: 320rpx;
      view {
        padding: 8rpx 0;
      }
      .details {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        view {
          width: 150rpx;
          border-radius: 50rpx;
          padding: 2rpx;
          border: 1px solid #ccc;
          text-align: center;
        }
      }
    }
  }
}
</style>
