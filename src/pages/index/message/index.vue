<template>
  <view class="container">
    <scroll-view scroll-y class="list_box" :style="'height:' + sHeight + 'rpx'">
      <block v-for="item in 5" :key="item">
        <view class="item_box" @click="handleInfo">
          <image :src="src" class="thumbnail" mode=""></image>
          <view class="message">
            <view class="title">The Wall</view>
            <view class="brief"
              >这张具有纪念意义的专辑其实是Pink
              Flody两位成员真实生活的写照。</view
            >
          </view>
          <image
            src="../../../static/styles/icon/gt.svg"
            class="greater"
            mode="widthFix"
          ></image>
        </view>
      </block>
    </scroll-view>
  </view>
</template>
<script>
var that;
var getRpx = require("@/utils/utils.js");
export default {
  data() {
    return {
      sHeight: "",
      src:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190508%2F19%2F1557313401-ryDGoiCTEJ.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629273757&t=c1f39fe00231461028ece5d3426059d7",
    };
  },
  onLoad() {
    that = this;
    that.sHeight = getRpx.getRpx() * uni.getSystemInfoSync().windowHeight - 10;
  },
  onShow() {},
  components: {},
  methods: {
    // 需要带参数id和标题
    handleInfo(id, title) {
      uni.navigateTo({
        url: `/pages/index/message/details/index?id=${id}&title=${title}`,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  padding: 0 20rpx;
  .list_box {
    width: 100%;
    .item_box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: nowrap;
      padding: 40rpx 0;
      border-bottom: 1px solid #ccc;
      .thumbnail {
        width: 130rpx;
        height: 130rpx;
      }
      .message {
        width: 490rpx;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        height: 130rpx;
        .title {
          width: 100%;
          word-break: break-all;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .brief {
          width: 100%;
          word-break: break-all;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
      .greater {
        width: 50rpx;
      }
    }
  }
}
</style>
