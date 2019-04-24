// 登录
const login = wx.login({
  success: res => {
    // 发送 res.code 到后台换取 openId, sessionKey, unionId
    var value = wx.getStorageSync('token');
    console.log(value == false)
    if (value) {
      console.log(11)
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
          console.log(res)
          // // Update local data
          // that.setData({
          //   token
          // });

          // wx.hideToast();
        }
      });
    } else {
      //Initiate network request to backend (to Paul's thing)
      wx.request({
        url: 'http://localhost:3000/api/v1/login',
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        data: {
          code: res.code
        },
        success: (token) => {
          console.log(token.data.authen)
          wx.setStorage({
            key: 'token',
            data: token.data.authen,
            success: () => {
              console.log('success')
            }
          })
        }
      })
    }
  }
})

export { login };