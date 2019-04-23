//index.js
//获取应用实例
const app = getApp()



Page({
  data: {
    items: []
  },

  buttonClicked: function() {
    wx.navigateTo({
      url:'/pages/landing/landing'
    })
  },

  onLoad: function () {

    // Fetch Items from GlobalData
    this.setData({
      items: app.globalData.items
    })


  }
})
