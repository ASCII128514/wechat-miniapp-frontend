//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)






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
  }











    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})