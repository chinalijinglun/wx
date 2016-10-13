Page({
  data:{
    // text:"这是一个页面"
     text:'默认'
  },
    //事件处理函数
  onLoad: function (options) {
    this.text =options.type || '默认'
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.text
    })
  },
})