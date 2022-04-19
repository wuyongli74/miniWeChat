// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        counter: 0
    },
    handleIncrement(event) {
        console.log(event);
        this.setData({
            counter: this.data.counter + 1
        })
    },
    handleIncrementCpn() {
        // 修改my-sel中的数据
        // 1.获取组件对象
        const my_sel = this.selectComponent('.sel-class')
        // const my_sel = this.selectComponent('#sel-id')
        console.log(my_sel);
        // 2.通过sel_setData修改组件中的数据
        // my_sel.setData({
        //     counter: my_sel.data.counter + 20
        // })
        // 3.通过方法对数据进行修改
        my_sel.incrementCounter(22)
    }
})