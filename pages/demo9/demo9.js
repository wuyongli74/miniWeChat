// pages/demo9/demo9.js
Page({
    data: {
        gender: '',
        list: [{
                id: 0,
                name: '苹果',
                value: 'apple',
            },
            {
                id: 1,
                name: '葡萄',
                value: 'grape',
            },
            {
                id: 2,
                name: '香蕉',
                value: 'bananer',
            },
        ],
        checkedList:[]
    },
    // 单选框的选中事件
    handleChange(e) {
        // console.log(e)
        // 1.获取单选框中的值
        let gender = e.detail.value
        // 2.把值赋给data中的数据
        this.setData({
            gender,
        })
    },
    // 复选框的选中事件
    handleItemChange(e) {
        // console.log(e);
        const checkedList =e.detail.value;
        this.setData({
            checkedList
        })
    },

    /**
     * 页面跳转
     * @param {*} options 
     */
    // onLoad: function (options) {
    //     console.log(options);
    // },
    // onUnload(){
    //     console.log('页面退出');
    // }
})