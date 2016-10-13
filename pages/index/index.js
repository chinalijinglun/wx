Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
     txt: [
     'this was a notice',
     'hi, what are you doing',
     'this was a notice',
     'hi, what are you doing'
    ],
     navs: [
      {
        image: 'https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png',
        text: '天猫'
      }, {
        image: 'https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png',
        text: '淘宝'
      }, {
        image: 'https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png',
        text: '天联'
      }, {
        image: 'https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png',
        text: '京东'
      }, {
        image: 'https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png',
        text: '超市'
      }, {
        image: 'https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png',
        text: '金融'
      }, {
        image: 'https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png',
        text: '佣金'
      }, {
        image: 'https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png',
        text: '电子券'
      }, {
        image: 'https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png',
        text: 'BOSS'
      }, {
        image: 'https://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png',
        text: 'steam'
      }
    ],
    sigle: [
      {
        image: 'http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000134003755_1_200x200.jpg',
        text: 'this is you name',
        price: '32'
      },{
        image: 'http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000134003755_1_200x200.jpg',
        text: 'this is you name',
        price: '32'
      },{
        image: 'http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000134003755_1_200x200.jpg',
        text: 'this is you name',
        price: '32'
      },{
        image: 'http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000134003755_1_200x200.jpg',
        text: 'this is you name',
        price: '32'
      },{
        image: 'http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000134003755_1_200x200.jpg',
        text: 'this is you name',
        price: '32'
      },{
        image: 'http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000134003755_1_200x200.jpg',
        text: 'this is you name',
        price: '32'
      },{
        image: 'http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000134003755_1_200x200.jpg',
        text: 'this is you name',
        price: '32'
      }
    
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
    //跳转页面
   otherPage: function(event) {
    wx.navigateTo({
      url: '../other/other?type=' + event.currentTarget.dataset.text
    })
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})