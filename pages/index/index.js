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
  },
})
