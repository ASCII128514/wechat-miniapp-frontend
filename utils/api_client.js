const farmerIndex = function () {
  var value = wx.getStorageSync('key')
  console.log(value)
  if (value) {
    wx.request({
      url: `http://localhost:3000/api/v1/farmer`,
      method: 'GET',
      data: {
        "tokens": {
          "token": value
        }
      },
	  success: res => {
        const products = res.data["user"];
        console.log(res.data)

        // Update local data
        this.setData({
          products: products
        });

        wx.hideToast();
      }
    });
  }
} 

export { farmerIndex };