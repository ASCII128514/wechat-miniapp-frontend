// pages/add_product/add_product.js
import {
  createProduct
} from '../../utils/api_client.js';

const AV = require('../../utils/av-webapp-min');
// const app = getApp();


Page({

  /**
   * Page initial data
   */
  data: {

  },
  formSubmit: function (e) {
    const page = this;
    console.log(page.data, "mypage")
    createProduct(e, page);
  },

  newPicture: function () {
    const page = this;
    console.log(page, "from pic")
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        let tempFilePath = res.tempFilePaths[0];
        new AV.File('file-name', {
          blob: {
            uri: tempFilePath
          }
        }).save().then(file => {
          console.log(12331, file.url());
          page.setData({
            url: file.url()
          });
        }).catch(console.error)
      },
      fail: () => {},
      complete: () => {}
    });
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(this, "from onload")
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