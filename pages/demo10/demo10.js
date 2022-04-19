// pages/demo10/demo10.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: '首页',
        isActive: true,
      },
      {
        id: 1,
        name: '原创',
        isActive: false,
      },
      {
        id: 2,
        name: '分类',
        isActive: false,
      },
      {
        id: 3,
        name: '关于',
        isActive: false,
      },
    ],
  },
  // 自定义事件，用来接收子组件传递的数据的
  hanldeItemChange(e) {
    // console.log(e)
    const { index } = e.detail
    let { tabs } = this.data
    // 4.循环数组
    // [].forEach遍历数组 遍历数组的时候修改了v,也会导致原数组被修改
    tabs.forEach((v, i) => (i === index ? (v.isActive = true) : (v.isActive = false)))
    this.setData({
      tabs,
    })
  },
})
