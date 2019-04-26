// pages/cart/cart.js
Page({

  /**
   * Page initial data
   */
  data: {
    product: {
      name: "Best tomatoes",
      price: "¥49.99",
      description: "the greenest spinach",
      farmer: "Mr. Awesome",
      category: "Vegetable",
      picture_url: "http://s3.sinaimg.cn/mw690/001JgdvWgy6I0IQtqUie2&690",
      quantity: "1 kilo",
    },
  },
    toPaid: function () {
      wx.navigateTo({
        url: '/pages/paid/paid'
      })
    },
  

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#f4e5e5'
    });

    wx.setNavigationBarTitle({
      title: 'Shopping Cart'
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

  },
})