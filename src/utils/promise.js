import { instance } from "./request.js";
// get请求
export function PromiseBagGet(url, parmas) {
    return new Promise((resolve, reject) => {
        instance.get(url, { parmas }).then((res) => {
            resolve(res);
        });
    });
}
// post请求
export function PromiseBagPost(url, data, header) {
    return new Promise((resolve, reject) => {
        instance.post(url, data, header).then((res) => {
            resolve(res);
        });
    });
}
// put请求
export function PromiseBagPut(url, data) {
    return new Promise((resolve, reject) => {
        instance.put(url, data).then((res) => {
            resolve(res);
        });
    });
}
// delete请求
export function PromiseBagDelete(url, data) {
    return new Promise((resolve, reject) => {
        instance.delete(url, data).then((res) => {
            resolve(res);
        });
    });
}