// pages/demo6/demo6.js
Page({
    onLoad: function (options) {
        console.log(options);
    },
    onUnload(){
        // 1.获取首页的页面对象
        // getCurrentPages当前所有栈的页面
       const pages= getCurrentPages()
       const home = pages[pages.length -2]
        // 2.调用对象页面的setData
        home.setData({
            titles:'嘿嘿嘿'
        })
    },
    handleBackHome(){
        wx.navigateBack({
            delta:1
        })
    }
})