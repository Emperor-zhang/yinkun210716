<script>
import axios from "axios";
export default {
  globalData: {
    route: "",
    value: "",
    open: 0,
    power: "",
    subState: "",
    openid: "",
    userid: "",
  },
  onLaunch: function(e) {
    let that = this;
    uni.hideTabBar();
    // console.log("e", e);
    // that.globalData.userid = e.query.UserID;
    // uni.setStorageSync("scene", e.scene);
    // uni.setStorageSync("userid", parseInt(e.query.UserID));
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  methods: {
    getTicket() {
      return new Promise((resolve, reject) => {
        let ticket = uni.getStorageSync("ticKet");
        if (!ticket) {
          axios
            .post("https://api.huoban.com/v2/ticket", {
              application_id: 1001817,
              application_secret: "l1qNziB5PL9CUHkk6Q7XFlCvZhDP8u3m27WqwMNo",
            })
            .then((response) => {
              console.log(response.data.ticket);
              uni.setStorageSync("ticKet", response.data.ticket);
              resolve(response);
            })
            .catch(function(error) {
              reject(error);
            });
        }
      });
    },
    /**
    获取企业通讯录单个部门详情 如果需要，在index.vue的show生命周期中Promise.all调用
    写法Promise.all([getApp().getTicket(),getApp().getCompany()])
     */
    getCompany() {
      return new Promise((resolve, reject) => {
        let ticket = uni.getStorageSync("ticKet");
        if (!ticket) {
          axios
            .post(
              "https://api.huoban.com/v2/company_departments/company/5100000000017639",
              {}
            )
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            });
        }
      });
    },
  },
};
</script>

<style>
/*每个页面公共css */

@import "./wxcomponents/vant/common/index.wxss";
@import "./styles/main.css";
@import "./styles/icon.css";
@import "./styles/animate.css";
@import "./styles/bass.wxss";
</style>
