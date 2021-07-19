<template>
  <view class="container">
    <scroll-view class="content" scroll-y :style="'height:' + sHeight + 'rpx'">
      <view class="box">
        <van-checkbox-group :value="result" @change="onChangeGroup">
          <van-checkbox name="a">
            <view class="itemTop" @click.stop="viewDetails">
              <view class="patent_mark">专利号:201920334341.0</view>
              <view class="patent_name">专利名称:一个塑料生产筛选装置专利</view>
              <view class="patent_type">专利号:实用新型专利第3年年费</view>
              <view class="patent_time">截止时间:2021-09-22</view>
            </view>
          </van-checkbox>
        </van-checkbox-group>
        <view class="itemBottom">
          <view class="item_total_info">
            <view class="item_total">
              <text>合计:</text>
              <view class="card_price">
                <text>¥</text>
                <text class="card__price-integer">30</text>
                <text class="card__price-decimal">.00</text>
              </view>
            </view>
            <view class="tip">已包含服务费:￥10</view>
          </view>
          <button class="go_pay" size="mini">去付款</button>
        </view>
      </view>
    </scroll-view>

    <van-submit-bar
      :price="3000"
      :button-text="buttonText"
      @submit="onClickButton"
      :tip="true"
    >
      <van-checkbox :value="checked" @change="onChange">全选</van-checkbox>
    </van-submit-bar>
  </view>
</template>

<script>
var getRpx = require("../../utils/utils.js");
var that;
export default {
  data() {
    return {
      sHeight: "",
      checked: false,
      result: [],
      buttonText: "提交订单",
      imageURL:
        "https://img20.360buyimg.com/pop/s590x470_jfs/t1/178749/21/14068/85901/60ee89e8E27cb375a/c11e2eb1b5358d97.jpg.webp",
    };
  },
  onLoad() {
    that = this;
    that.sHeight = getRpx.getRpx() * uni.getSystemInfoSync().windowHeight - 100;
  },
  onShow() {},
  components: {},
  methods: {
    onClickButton() {
      console.log("A");
    },
    // 全选
    onChange(event) {
      that.checked = event.detail;
    },
    // 复选列表
    onChangeGroup(event) {
      that.result = event.detail;
    },
    // 详情
    viewDetails(e) {},
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: #fd0d0d;
}
/deep/.van-button--round {
  border: none;
  background-image: -webkit-linear-gradient(left, #d89e3c, #fd0d0d);
}
.container {
  width: 100%;
  position: relative;
  .content {
    width: 100%;
    height: 280rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0rpx 0rpx 20rpx 10rpx #ccc;
    padding: 0 10rpx;
    border-top: 6rpx rgb(226, 226, 226);
    .box {
      box-shadow: 0rpx 0rpx 20rpx 10rpx #eee;
      margin: 40rpx 0;
      .itemTop {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 170rpx;
        width: 660rpx;
      }
      .itemBottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 660rpx;
        margin-left: 62rpx;
        font-family: Arial, Helvetica, sans-serif;

        .item_total_info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 28rpx;
          .item_total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .card_price {
              color: #ff0000;
              .card__price-integer {
                font-size: 32rpx;
              }
              .card__price-decimal {
                font-size: 24rpx;
              }
            }
          }
        }
        .go_pay {
          border-radius: 100rpx;
          background-color: rgb(255, 160, 106);
          color: #fff;
          margin: 0;
        }
      }
    }
  }
}
</style>
