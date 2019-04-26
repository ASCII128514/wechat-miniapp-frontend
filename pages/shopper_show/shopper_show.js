// pages/shopper_show/shopper_show.js
import { changeFormToOrder, addToCart } from '../../utils/cart_logic.js';

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
    buy_num: 1
  },

  addItemToCart: function (e) {
    // console.log(333433434, changeFormToOrder)
    console.log('start order');
    let order = changeFormToOrder(e,this.data);
    console.log(order);
    addToCart(order);
    wx.redirectTo({
      url: '/pages/shopper_listing/shopper_listing'
    })
  },

  toCart: function () {
    wx.navigateTo({
      url: '/pages/cart/cart'
    })
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
      title: 'Organic food',
    })
    this.setData({
      product: getApp().globalData.productInfo,
      farmer: getApp().globalData.farmerInfo
    })
    getApp().globalData.productInfo = null;
    getApp().globalData.farmerInfo = null;
    // console.log(this.data.product.product_name)
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
  reduceAmount: function () {
    let buy_num = this.data.buy_num
    if (buy_num > 0) {
      buy_num -= 1
      this.setData({
        buy_num: buy_num
      })
    }    
  },
  
  increaseAmount: function () {
    let buy_num = this.data.buy_num
    buy_num += 1
    this.setData ({
      buy_num: buy_num
    })
  },

  changeAmount: function (e) {
    let value = e.detail.value
    if (value < 0) {
      value = 0
    }
    this.setData ({
      buy_num: value
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
