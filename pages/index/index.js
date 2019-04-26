//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
  },

  buttonClicked: function() {
    wx.navigateTo({
      url:'/pages/landing/landing'
    })
  },

  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#cbdde9',
    })

    wx.setNavigationBarTitle({
      title: 'Organic Farming',
    })
  },
})
