const farmerIndex = function (page) {
  var value = wx.getStorageSync('token')
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
        page.setData({
          products: products
        });
        console.log(page.data);
        wx.hideToast();
      }
    });
  }
} 

const createProduct = function (page) {
  var value = wx.getStorageSync('token')
  console.log(value)
  if (value) {
    wx.request({
      url: `http://localhost:3000/api/v1/product`,
      method: 'POST',
      data: {
        "tokens": {
          "token": value
        }
      },
      success: res => {
        const newProduct = res.data["product"];
        console.log(res.data)

        // Update local data
        page.setData({
          newProduct: newProduct
        });
        console.log(page.data);
        wx.hideToast();
      }
    });
  }
} 

export { farmerIndex, createProduct };