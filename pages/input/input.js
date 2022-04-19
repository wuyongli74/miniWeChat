// pages/demo1/demo1.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
  },
  // 输入框的input事件的执行逻辑
  handleInput(e) {
    console.log(e,"输入");
    this.setData({
      num: e.detail.value,
    });
  },
  handleFocus(e) {
    console.log(e,"获取");
  },
  handleBlur(e) {
    console.log(e,"失去");
  },
  handletap(e) {
    console.log(e);
    // 1.获取自定义属性 operation
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num + operation,
    });
  },
});
