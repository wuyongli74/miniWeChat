// pages/home/home.js
import request from "../../service/network.js";

// const app = getApp()
// app.globalData.token

Page({

    /**
     * 弹窗提示
     */
    handleShowToast() {
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 2000,
            mask: true,
            success: function () {
                console.log('展示弹窗成功');
            },
            fail: function () {
                console.log('展示弹窗失败');
            },
            complete: function () {
                console.log('完成函数的调用');
            }
        })
    },
    handleShowModal() {
        wx.showModal({
            title: '标题',
            content: '哈哈哈',
            // showCancel:false,
            cancelText: '退出',
            cancelColor: 'red',
            success: (result) => {
                console.log(result);
            },
            fail: (res) => {
                console.log(res);
            },
            complete: (res) => {
                console.log(res);
            },
        })
    },
    handleShowLoading() {
        wx.showLoading({
                title: '加载中',
                mask: true,
                success: (res) => {},
                fail: (res) => {},
                complete: (res) => {},
            }),
            setTimeout(() => {
                // 必须手动hideLoading才会让Loading消失
                wx.hideLoading({
                    success: (res) => {
                        console.log(res);
                    },
                })
            }, 1000)
    },
    handleShowAction() {
        wx.showActionSheet({
            itemList: ['相册', '拍照'],
            itemColor: 'red',
            success:(res)=>{
                console.log(res);
            },
            fail:(res)=>{
                console.log(res);
            }
        })
    },
    onShareAppMessage:function(options) {
        return {
            title:'测试分享',
            path:'pages/demo10/demo10',
            imageUrl:'https://img2.woyaogexing.com/2018/10/24/86dcf3e6bc2d30b4!400x400_big.jpg'
        }
    },
    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 1.原生的方式方式网络请求
        this.get_data_origin()

        // 2.封裝request发送请求
        request({
            url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
        }).then(res => {
            // console.log(res);
        }).catch(err => {
            console.log(err);
        })
    },
    get_data_origin() {
        // 1.发送最简单的网络请求
        // wx.request({
        //     url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
        //     success: function (res) {
        //         console.log(res);
        //     }
        // })
    },

})