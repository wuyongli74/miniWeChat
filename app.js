// app.js
const TOKEN = 'token'

App({
  // 对象：小程序关掉
  globalData: {
    token: ''
  },
  // 1.应用第一次启动就会触发的事件
  onLaunch() {
    // 在应用第一次启动的时候获取用户的个人信息
    // js的方式来跳转 -- 不能触发onPageNotFound
    // wx.navigateTo({
    //   url: '../www/dd',
    // })
    /**
     * 登录操作
     */
    // 1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    // 2.判断token是否有值
    if (token && token.length !== 0) { //已近有token，验证token是否过期   
      this.check_token(token) // 验证token是否过期
    } else { // 没有token，进行登录操作
      this.login()
    }

  },
  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'POST',
      header:{
        token
      },
      success:(res)=>{
        if (!res.data.errCode) {
          this.globalData.token = token
        } else {
          this.login()
        }
      },
      fail:(err)=>{
        console.log(err);
      }
    })
  },
  login() {
    wx.login({
      // code只有5分钟的有效期
      success: (res) => {
        // 1.获取code
        const code = res.code;
        // 2.将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code
          },
          success: (res) => {
            // 1.取出token
            const token = res.data.token;
            // 2.将token保存在globalData中
            this.globalData.token = token;
            // 3.进行本地存储
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  },
  // 2.应用 被用户看到
  onShow() {
    // console.log('onShow')
  },

  // 3.应用隐藏
  onHide() {
    console.log('Hide')
  },

  // 4.应用的代码发生了报错的时候就会触发
  onError(err) {
    // 在应用发生代码报错的时候，收集用户的错误信息，通过异步请求，将错误的信息发送后台去
    console.log(err);
    console.log("err");
  },

  // 5.页面找不到就会触发
  // 应用第一次启动的时候，如果找不到第一个入口页面 才会触发
  onPageNotFound() {
    // 如果页面不存在 通过js的方式来重新跳转页面，重新跳到第二个首页
    // 不能跳到tabbar页面 导航组件类似
    wx.navigateTo({
      url: '/pages/demo5/demo5',
    })
    console.log("onPageNotFound");
  }
})