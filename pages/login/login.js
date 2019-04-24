// pages/login.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var value = wx.getStorageSync('key');
    if (value) {
      wx.request({
        url: 'http://localhost:3000/api/v1/login',
        method: 'POST',
        data: {
          "tokens": {
            "token": value
          }
        },
      success: (res) => {
        const token = res.data;

        // Update local data
        that.setData({
          token
        });

        wx.hideToast();
        }
      });
    } else {
    () => {
      wx.login({
        success: function (res) {
          if (res.code) {
            //Initiate network request to backend (to Paul's thing)
            wx.request({
              url: 'http://localhost:3000/api/v1/login',
              data: {
                code: res.code
              },
              success: (token) => {
                wx.setStorage({
                  key: token,
                })
              }
            })
          } else {
      console.log('Failed to login.')
          }
        }
      });
    }
  }},

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