<template>
  <view class="container">
    <view class="uni-padding-wrap">
      <swiper
        class="swiper"
        :indicator-dots="indicatorDots"
        :indicator-color="indicatorColor"
        :indicator-active-color="indicatorActiveColor"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        :circular="circular"
      >
        <block v-for="(item, index) in imgArr" :key="index">
          <swiper-item>
            <image :src="item" class="swiperImg" mode="widthFix" />
          </swiper-item>
        </block>
      </swiper>
    </view>
  </view>
</template>

<script>
var that;
export default {
  props: {
    imgArr: {
      type: Array,
      default() {
        return [];
      },
    },
    indicatorDots: {
      type: Number,
      default: Boolean,
    },
    indicatorColor: {
      type: String,
      default: "",
    },
    indicatorActiveColor: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 140,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    circular: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: true,
    },
    duration: {
      type: Number,
      default: 140,
    },
  },
  data() {
    return {};
  },
  created() {
    that = this;
    uni.showTabBar();
  },
  mounted() {},
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;
  .uni-padding-wrap {
    .swiper {
      width: 100%;
      height: 267rpx;
      .swiperImg {
        width: 100%;
      }
    }
  }
}
</style>
