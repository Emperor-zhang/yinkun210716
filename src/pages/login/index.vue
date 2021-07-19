<template>
  <view class="content">
    <view class="container">
      <view class="pageBox" style="padding: 10% 10%">
        <view
          style="
            height: 1px;
            width: 100%;
            margin: 20px auto;
            background: #e8e8e8;
          "
        ></view>
        <view style="margin: 40px 0">
          <text style="color: #000000; font-weight: bold"
            >申请获取以下权限</text
          >
          <text style="color: #c1b6b4">获得你的公开信息（昵称，头像等）</text>
        </view>
        <view class="clickButton">
          <button class="btnThink" @click="btnThink">再想想</button>
          <button
            v-if="canUseGetUserProfile"
            class="btn"
            hover-class="none"
            type="primary"
            @tap="bindGetUserInfo"
          >
            授权登录
          </button>
          <button
            v-else
            class="btn"
            open-type="getUserInfo"
            type="primary"
            @getuserinfo="bindGetUserInfo"
          >
            授权登录
          </button>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
var that;
var app = getApp();
import { getResquest } from "@/utils/api.js";
export default {
  data() {
    return {
      userid: "",
      foodid: "",
      userNickurl: "",
      nickurl: "",
      nickname: "",
      openid: "",
      gender: "",
      canUseGetUserProfile: false,
      nickState: 0,
    };
  },
  onLoad(options) {
    that = this;
    if (uni.getUserProfile) {
      that.canUseGetUserProfile = true;
    }
  },
  onShow() {
    that.openid = uni.getStorageSync("openid");
    that.nickState = uni.getStorageSync("nickState");
    // that.login();
  },
  components: {},
  methods: {
    login() {
      if (!that.openid) {
        uni.login({
          provider: "weixin",
          success: function(loginRes) {
            getResquest("CommonHelper.ashx?Method=GetOpenID", {
              Code: loginRes.code,
            }).then((res) => {
              uni.setStorageSync("openid", res.data[0].OpenID);
              uni.setStorageSync("userid", res.data[0].UserID);
              that.openid = res.data[0].OpenID;
            });
          },
        });
      }
    },
    SaveNickName() {
      getResquest("CommonHelper.ashx?Method=SaveNickName", {
        OpenID: that.openid,
        NickName: that.nickname, //昵称
        NickUrl: that.nickurl, //头像
      }).then((res) => {
        console.log(res);
      });
    },
    btnThink() {
      uni.navigateBack({
        delta: 1,
      });
    },
    bindGetUserInfo(e) {
      //旧版本方式
      if (that.canUseGetUserProfile == false) {
        //获取授权信息
        if (e.detail.userInfo) {
          console.log("用户允许了授权");
          console.log(e.detail.userInfo); //1.拿到基本的微信信息!!
          uni.setStorageSync("logined", 1);
          uni.setStorageSync("nickname", e.detail.userInfo.nickName);
          uni.setStorageSync("nickurl", e.detail.userInfo.avatarUrl);

          if (e.detail.userInfo.gender == 1) {
            that.gender = "男";
          } else if (e.detail.userInfo.gender == 2) {
            that.gender = "女";
          }
          let pages = getCurrentPages(); //获取所有页面栈实例列表
          let prevPage = pages[pages.length - 2]; //上一页页面实例
          prevPage.$vm.logined = 1; //修改上一页面的 logined 参数值为 1
          prevPage.$vm.nickUrl = e.detail.userInfo.avatarUrl; //修改上一页面的头像
          prevPage.$vm.nickName = e.detail.userInfo.nickName; //修改上一页面的昵称
          uni.setStorageSync("gender", that.gender);
          that.nickurl = e.detail.userInfo.avatarUrl;
          uni.navigateBack({
            delta: 1,
          });
        }
        //新版本方式
      } else {
        uni.getUserProfile({
          desc: "用于授权登录",
          lang: "zh_CN",
          success: function(res) {
            console.log(res.userInfo);
            uni.setStorageSync("logined", 1);
            that.nickurl = res.userInfo.avatarUrl;
            that.nickname = res.userInfo.nickName;
            uni.setStorageSync("nickname", res.userInfo.nickName);
            uni.setStorageSync("nickurl", res.userInfo.avatarUrl);
            if (res.userInfo.gender == 1) {
              that.gender = "男";
            } else if (res.userInfo.gender == 2) {
              that.gender = "女";
            }
            let pages = getCurrentPages(); //获取所有页面栈实例列表
            let prevPage = pages[pages.length - 2]; //上一页页面实例
            prevPage.$vm.logined = 1; //修改上一页面的 logined 参数值为 1
            uni.setStorageSync("gender", that.gender);
            uni.navigateBack({
              delta: 1,
            });
            // that.$nextTick(function() {
            //   that.SaveNickName();
            // });
          },
          fail: function(res) {
            console.log("wx.getUserProfile=>用户拒绝了授权");
            console.log(res);
          },
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 750rpx;
  height: 100vh;
  position: relative;
  .container {
    width: 100%;
    height: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    .pageBox {
      padding: 10%;
    }
    .clickButton {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      line-height: 40px;
    }
    .btn {
      width: 30%;
      color: #ffffff;
      background: #1aad19;
      text-align: center;
      border-radius: 20px;
      margin: auto;
      font-size: 30rpx;
    }
    .btnThink {
      width: 30%;
      color: #ffffff;
      background: #ccc;
      text-align: center;
      border-radius: 20px;
      margin: auto;
      font-size: 30rpx;
    }
  }
}
</style>
