function getRpx() {
    let winWidth = uni.getSystemInfoSync().windowWidth;
    return 750 / winWidth;
}
module.exports = {
    getRpx
}