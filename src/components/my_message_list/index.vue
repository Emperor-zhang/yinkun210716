<template>
  <view class="container">
    <block v-for="(item, index) in message_list" :key="index">
      <view class="content" @click="handleInfo">
        <image class="thumbnail" mode="" :src="item.url"></image>
        <view class="content_info">
          <view class="info_title">{{ item.title }}</view>
          <view class="info_intro">{{ item.info }}</view>
        </view>
      </view>
    </block>
  </view>
</template>
<script>
var that;
export default {
  props: {
    message_list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      arr: [],
    };
  },
  created() {
    that = this;
  },
  mounted() {},
  components: {},
  methods: {
    // 需要带参数id和标题
    handleInfo(id, title) {
      uni.navigateTo({
        url: `/pages/index/message/details/index?id=${id}&title=${title}`,
      });
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  .content {
    width: 100%;
    height: 200rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: normal;
    border-top: 1px solid #ccc;
    .thumbnail {
      width: 130rpx;
      height: 130rpx;
    }
    .content_info {
      width: 550rpx;
      height: 130rpx;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      .info_title {
        font-weight: 600;
        font-size: 28rpx;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .info_intro {
        font-size: 24rpx;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>
