// pages/landing/landing.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
 
//  button to sell page
  toSell: function () {
    wx.navigateTo({
      url: '/pages/listing/listing'
    })
  },

  //  button to buy page
  toBuy: function () {
    wx.navigateTo({
      url: '/pages/shopper_listing/shopper_listing'
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#98d1d2',
    })

    wx.setNavigationBarTitle({
      title: 'Organic Farming',
    })

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})