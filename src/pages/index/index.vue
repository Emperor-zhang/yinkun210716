<template>
  <view class="container">
    <mySwiper
      :imgArr="swiperList"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
      :circular="circular"
      :indicatorDots="indicatorDots"
      :indicatorColor="indicatorColor"
      :indicatorActiveColor="indicatorActiveColor"
    ></mySwiper>
    <navList></navList>
    <view class="serve">垠坤企服特色服务</view>
    <mySwiper
      class="swiperTwo"
      :imgArr="swiperList2"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
      :circular="circular"
      :indicatorDots="indicatorDots"
      :indicatorColor="indicatorColor"
      :indicatorActiveColor="indicatorActiveColor"
    ></mySwiper>
    <view class="message"
      >精选资讯
      <view class="message_more" @click="handleMore">查看更多>></view>
    </view>
    <messageList :message_list="message_list" class="messageList"></messageList>
  </view>
</template>
<script>
var that;
import mySwiper from "@/components/my_swiper/index";
import navList from "@/components/my_nav_list/index";
import messageList from "@/components/my_message_list/index";
export default {
  data() {
    return {
      autoplay: true,
      interval: 3000,
      duration: 1500,
      circular: true,
      indicatorDots: true,
      indicatorColor: "#ff0000",
      indicatorActiveColor: "#611313",
      swiperList: [
        "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg",
        "https://img.alicdn.com/imgextra/i1/6000000008079/O1CN01kotcXe29YEVObhi37_!!6000000008079-0-octopus.jpg",
        "https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg",
        "https://img.alicdn.com/imgextra/i2/6000000004443/O1CN01LU3qnv1igwPbvzfKz_!!6000000004443-0-octopus.jpg",
      ],
      swiperList2: [
        "https://img20.360buyimg.com/pop/s590x470_jfs/t1/178749/21/14068/85901/60ee89e8E27cb375a/c11e2eb1b5358d97.jpg.webp",
        "https://img20.360buyimg.com/pop/s590x470_jfs/t1/182780/36/3645/90739/609b630bEc2e56747/dbe0b75e4ed87bbf.jpg.webp",
        "https://img12.360buyimg.com/pop/s590x470_jfs/t1/196043/6/13304/99839/60f0edf5E1abad663/a581b6d253c8d3fe.jpg.webp",
        "https://img11.360buyimg.com/pop/s590x470_jfs/t1/184696/38/12293/98820/60dff17bE72e204db/07ee09a21f35514b.jpg.webp",
      ],
      message_list: [
        {
          url:
            "https://img20.360buyimg.com/pop/s590x470_jfs/t1/178749/21/14068/85901/60ee89e8E27cb375a/c11e2eb1b5358d97.jpg.webp",
          title: "第二十二届中国专利奖结果出炉",
          info:
            "这国家知识产权局近日发布关于第二十二届中国专利奖授奖的决定，30件发明专利这国家知识产权局近日发布关于第二十二届中国专利奖授奖的决定，30件发明专利",
        },
        {
          url:
            "https://img20.360buyimg.com/pop/s590x470_jfs/t1/182780/36/3645/90739/609b630bEc2e56747/dbe0b75e4ed87bbf.jpg.webp",
          title: "第二十二届中国专利奖结果出炉",
          info:
            "这国家知识产权局近日发布关于第二十二届中国专利奖授奖的决定，30件发明专利这国家知识产权局近日发布关于第二十二届中国专利奖授奖的决定，30件发明专利",
        },
        {
          url:
            "https://img11.360buyimg.com/pop/s590x470_jfs/t1/184696/38/12293/98820/60dff17bE72e204db/07ee09a21f35514b.jpg.webp",
          title: "第二十二届中国专利奖结果出炉",
          info:
            "这国家知识产权局近日发布关于第二十二届中国专利奖授奖的决定，30件发明专利这国家知识产权局近日发布关于第二十二届中国专利奖授奖的决定，30件发明专利",
        },
      ],
    };
  },
  onLoad() {
    that = this;
  },
  watch: {},
  onShow() {},
  components: {
    mySwiper,
    navList,
    messageList,
  },
  methods: {
    login() {
      uni.navigateTo({
        url: "/pages/login/index",
      });
    },
    // 经选资讯查看更多
    handleMore() {
      uni.navigateTo({
        url: "/pages/index/message/index",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 730rpx;
  margin-left: 10rpx;
  position: relative;
  .serve {
    font-size: 30rpx;
    font-weight: 600;
    padding-bottom: 20rpx;
  }
  .swiperTwo {
    padding-bottom: 30rpx;
  }
  .message {
    font-size: 30rpx;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50rpx 0 20rpx 0;
    .message_more {
      font-weight: normal;
      font-size: 26rpx;
    }
  }
}
</style>
