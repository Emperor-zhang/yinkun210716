import axios from "axios";
//创建axios对象
export let instance = axios.create({
    baseURL: "https://api.huoban.com/v2/",
    timeout: 5000,
});

// 请求拦截
instance.interceptors.request.use(
    function(config) {
        // debugger;
        // config.url = config.baseURL + config.url;
        let tic = uni.getStorageSync("ticKet");
        let sId = uni.getStorageSync("spaceId");
        if (tic) {
            config.headers["X-Huoban-Ticket"] = tic;
            config.headers["X-Huoban-Return-Alias-Space-Id"] = sId;
        }
        // console.group("全局请求拦截");
        // console.log(config);
        // console.groupEnd();
        uni.showLoading({
            title: "加载中",
        });
        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);
// 响应拦截
// 所有的网络请求返回数据之后都会走这个方法
instance.interceptors.response.use(
    function(response) {
        // console.group("全局响应拦截");
        // console.log(response);
        // console.groupEnd();
        uni.hideLoading();
        return response;
    },
    function(err) {
        return Promise.reject(err);
    }
);

//真机获取
axios.defaults.adapter = function(config) {
    return new Promise((resolve, reject) => {
        var settle = require("axios/lib/core/settle");
        var buildURL = require("axios/lib/helpers/buildURL");
        uni.request({
            method: config.method.toUpperCase(),
            url: buildURL(
                config.baseURL + config.url,
                config.params,
                config.paramsSerializer
            ),
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config,
                };
                settle(resolve, reject, response);
            },
        });
    });
};