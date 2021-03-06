// pages/shopper_listing/shopper_listing.js
import { shopperIndex } from '../../utils/api_client.js';
import { shopperShow } from '../../utils/api_client.js';
Page({

  /**
   * Page initial data
   */
  data: {
    products: [{
      picture: "../../Img/listing_1.jpeg",
      name: "Best spinch",
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

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    shopperIndex(this);

    wx.setNavigationBarColor({
        frontColor: '#000000',
      backgroundColor: '#abb1ca',
      })

      wx.setNavigationBarTitle({
        title: 'Available today',
      })
  },

  //  button to product show page page
  showProduct: function (res) {
    shopperShow(res)
    wx.navigateTo({
      url: '/pages/shopper_show/shopper_show'
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