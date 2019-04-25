// pages/listing/listing.js
import { farmerIndex } from '../../utils/api_client.js';
Page({

  /**
   * Page initial data
   */
  data: {
    products: [{
        picture: "../../Img/listing_1.jpeg",
        name:"Best spinch",
        price:"$49.99"
      },
      {
        picture: "../../Img/listing_2.jpeg",
        name: "Best tomatoes",
        price: "$49.99"
      },
      {
        picture: "../../Img/listing_1.jpeg",
        name: "Best tomatoes",
        price: "$49.99"
      },
      {
        picture: "../../Img/listing_2.jpeg",
        name: "Best tomatoes",
        price: "$49.99"
      },
      {
        picture: "../../Img/listing_1.jpeg",
        name: "Best tomatoes",
        price: "$49.99"
      },
      {
        picture: "../../Img/listing_2.jpeg",
        name: "Best tomatoes",
        price: "$49.99"
      }]
  },

  //  button to sell page
  toNew: function () {
    wx.navigateTo({
      url: '/pages/add_product/add_product'
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    farmerIndex(this);
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