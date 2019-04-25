// pages/shopper_show/shopper_show.js
// import { shopperShow } from '../../utils/api_client.js';
Page({

  /**
   * Page initial data
   */
  data: {
    // product: {
    //   picture_url: "../../Img/listing_1.jpeg",
    //   product_name: "Best spinach",
    //   product_price: "$49.99",
    //   product_description: "the greenest spinach",
    //   product_farmer: "Mr. Awesome"
    // },
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({ 
      product: getApp().globalData.productInfo,
      farmer: getApp().globalData.farmerInfo
    })
    getApp().globalData.productInfo = null;
    getApp().globalData.farmerInfo = null;
    console.log(this.data.product.product_name)
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