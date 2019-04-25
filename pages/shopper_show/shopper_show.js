// pages/shopper_show/shopper_show.js
// import { shopperShow } from '../../utils/api_client.js';
Page({

  /**
   * Page initial data
   */
  data: {
    // product: {
    //   name: "Best spinach",
    //   price: "$49.99",
    //   description: "the greenest spinach",
    //   farmer: "Mr. Awesome",
    //   category: "Vegetable",
    //   picture_url: "http://s3.sinaimg.cn/mw690/001JgdvWgy6I0IQtqUie2&690",
    // },
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#f1dede',
    })

    wx.setNavigationBarTitle({
      title: 'The most expensive tomato',
    })
    this.setData({
      product: getApp().globalData.productInfo,
      farmer: getApp().globalData.farmerInfo
    })
    getApp().globalData.productInfo = null;
    getApp().globalData.farmerInfo = null;
    console.log(this.data.product.product_name)
  },

  previewImage: function(e) {
    // console.log('previewImage', e)
    const image = e.currentTarget.dataset.image;

    wx.previewImage({
      urls: [image],
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
