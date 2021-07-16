function timeShift(timestamp) {
    let d = new Date(timestamp);
    let youWant = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + (d.getHours() < 10 ? '0' + d.getHours() : d.getHours()) + ':' + (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) + ':' + (d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds());
    return youWant
}
export default timeShift

// 调用方法
// timeShift(res.data.header.Date)