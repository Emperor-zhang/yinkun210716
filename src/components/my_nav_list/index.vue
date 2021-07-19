<template>
  <view class="container">
    <view class="nav_list">
      <block v-for="item in projectArr" :key="item.id">
        <view class="nav_list_item" @click="navListInfo(item.id)">
          <image :src="item.url" class="nav_img" mode="widthFix"></image>
          <view class="nav_title">{{ item.name }}</view>
        </view>
      </block>
    </view>
  </view>
</template>
<script>
var that;
export default {
  data() {
    return {
      projectArr: [
        {
          url: "../../static/styles/icon/nav1.png",
          name: "我的项目",
          id: 1,
        },
        {
          url: "../../static/styles/icon/nav2.png",
          name: "年费缴纳",
          id: 2,
        },
        {
          url: "../../static/styles/icon/nav3.png",
          name: "邀请有礼",
          id: 3,
        },
        {
          url: "../../static/styles/icon/nav4.png",
          name: "在线客服",
          id: 4,
        },
      ],
    };
  },
  onLoad() {
    that = this;
  },
  onShow() {},
  components: {},
  methods: {
    navListInfo(navid) {
      switch (navid) {
        case 1:
          uni.switchTab({
            url: "/pages/project/index",
          });
          break;
        case 2:
          uni.switchTab({
            url: "/pages/pay/index",
          });
        case 3:
          uni.navigateTo({
            url: "/pages/index/invitation/index",
          });
        case 4:
          // 在线客服
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;
  .nav_list {
    width: 100%;
    height: 200rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .nav_list_item {
      width: 20%;
      height: 120rpx;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      .nav_img {
        width: 60rpx;
      }
      .nav_title {
      }
    }
  }
}
</style>
