// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        titles: ["衣服", "裤子", "帽子"]
    },

    handleBtnClick() {
        console.log("点击事件");
    },
    handleTouchStart() {
        console.log("handleTouchStart");
    },
    handleTouchMove() {
        console.log("handleTouchMove");
    },
    handleTouchEnd() {
        console.log("handleTouchEnd");
    },
    handleTap() {
        console.log("handleTap");
    },
    handleLongPress() {
        console.log("handleLongPress");
    },
    handleEventClick(e) {
        console.log(e, "---");
    },
    handleEVentEnd(e) {
        console.log(e, "+++++");
    },
    handleOuter(e) {
        console.log(e, "handleOuter");
    },
    handleInner(e) {
        console.log(e, "handleInner");
    },
    handleItemClick(e) {
        console.log(e.currentTarget.dataset.index);
        console.log(e.currentTarget.dataset.item);
    },
    // 事件冒泡和捕获
    handleCaptureView1(){
        console.log("handleCaptureView1");
    },
    handleBindView1(){
        console.log("handleBindView1");
    },
    handleCaptureView2(){
        console.log("handleCaptureView2");
    },
    handleBindView2(){
        console.log("handleBindView2");
    },
    handleCaptureView3(){
        console.log("handleCaptureView3");
    },
    handleBindView3(){
        console.log("handleBindView3");
    },
})