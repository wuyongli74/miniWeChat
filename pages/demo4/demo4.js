// pages/demo4/demo4.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nowTime: new Date().toLocaleString(),
        isShow: true,
        score: (Math.random() * 90 + 10).toFixed(1)
    },
    onLoad() {
        setInterval(() => {
            this.setData({
                nowTime: new Date().toLocaleString()
            }, 1000)
        })
    },
    handleSwitchShow() {
        this.setData({
            isShow: !this.data.isShow,
        })
    }


})