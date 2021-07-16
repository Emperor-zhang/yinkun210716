import {
    PromiseBagGet,
    PromiseBagPost,
    PromiseBagPut,
    PromiseBagDelete,
} from "./promise.js";
// export function getResquest(url, params) {
//     return instance.get(url, {
//         params,
//     });
// }
// export function postResquest(url, data) {
//     return instance.post(url, data);
// }
// 调用方法
//  getResquest("categories", {}).then((res) => {
//    console.log(res);
//  });
// ------------------------------------------------------------------------------------
/**
 *
 * @param {
 * } parmas
 * @returns
 */
// 获取表格列表
// 4000000003082241
export function TableList(parmas) {
    return PromiseBagGet(
        "https://api.huoban.com/v2/tables/space/4000000003435065",
        parmas
    );
}
// 获取表格详情
export function TableListInfo(parmas) {
    return PromiseBagGet(
        "https://api.huoban.com/v2/table/2100000014828103",
        parmas
    );
}
//查询表格数据
export function TableInfoFind(data) {
    return PromiseBagPost(
        "https://api.huoban.com/v2/item/table/2100000015067910/find",
        data
    );
}
// 获取单条数据
export function TableInfoItem(parmas) {
    return PromiseBagGet(
        "https://api.huoban.com/v2/item/2300003948774111",
        parmas
    );
}
// 创建单条数据
export function creatOneInfo(data) {
    return PromiseBagPost(
        "https://api.huoban.com/v2/item/table/2100000017229356",
        data
    );
}
// 更新单条数据
export function updateOneInfo(data) {
    return PromiseBagPut("https://api.huoban.com/v2/item/2300003949051713", data);
}
// 删除单条数据
export function deleteOneInfo(data) {
    return PromiseBagDelete(
        "https://api.huoban.com/v2/item/2300003949037020",
        data
    );
}
// 批量删除单条数据
export function deleteMoreInfo(data) {
    return PromiseBagPost(
        "https://api.huoban.com/v2/item/table/2100000017229356/delete",
        data, { headers: { "X-Huoban-Return-Alias-Space-Id": 4000000003435065 } }
    );
}
// 文件上传
export function upFile(forms) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: "https://upload.huoban.com/v2/file",
            method: "POST",
            async: true,
            crossDomain: true,
            header: {
                "Content-Type": "multipart/form-data;boundary=XXX", //格式转换为binary,
                "cache-control": "no-cache",
                "X-Huoban-Ticket": uni.getStorageSync("ticKet"),
            },
            processData: false,
            contentType: false,
            mimeType: "multipart/form-data",
            data: "\r\n--XXX" +
                '\r\nContent-Disposition: form-data; name="source"' +
                "\r\n" +
                "\r\n" +
                forms.source +
                "\r\n--XXX" +
                '\r\nContent-Disposition: form-data; name="name"' +
                "\r\n" +
                "\r\n" +
                forms.name +
                "\r\n--XXX" +
                '\r\nContent-Disposition: form-data; name="type"' +
                "\r\n" +
                "\r\n" +
                forms.type +
                "\r\n--XXX",
            success: (res) => {
                resolve(res);
            },
        });
    });
}