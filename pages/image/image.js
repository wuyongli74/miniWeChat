// pages/img/img.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imagePath: ''
    },
    handleChooseAlbum() {
        // 系统API，让用户在相册中选择图片(或者拍照)
        wx.chooseImage({
            success: (result) => {
                // 1.取出路径
                const path = result.tempFilePaths[0]
                // 2.设置imagePath
                this.setData({
                    imagePath:path
                })
            },
        })
    },
    handleImageLoad(){
        console.log("完成");
    }
})