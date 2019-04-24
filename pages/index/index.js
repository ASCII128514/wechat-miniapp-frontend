//index.js
//获取应用实例
const app = getApp()



Page({
  data: {
    // items: []
  },

  buttonClicked: function() {
    wx.navigateTo({
      url:'/pages/landing/landing'
    })
  },

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
})
