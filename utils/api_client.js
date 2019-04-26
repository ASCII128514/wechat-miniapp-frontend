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

const createProduct = function (page, p) {
  var value = wx.getStorageSync('token')
  console.log(value);
  console.log(p, 123321);
  if (value) {
    wx.request({
      url: `http://localhost:3000/api/v1/product`,
      method: 'POST',
      data: {
        "tokens": {
          "token": value
        },
        "product": {
          "unit": page.detail.value.unit,
          "product_price": page.detail.value.price,
          "product_name": page.detail.value.name,
          "picture_url": p.data.url || "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4266087431,2209117257&fm=200&gp=0.jpg",
          "description": page.detail.value.description
        },
        "quantity": page.detail.value.inventory
      },
      success: res => {
        wx.redirectTo({
          url: '../listing/listing',
        })
      }
    })

  }
}

const shopperIndex = function (page) {
  var value = wx.getStorageSync('token')
  console.log(value)
  if (value) {
    wx.request({
      url: `http://localhost:3000/api/v1/products`,
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

const shopperShow = function (page) {
  console.log(page)
  var value = wx.getStorageSync('token')
  console.log(value)
  if (value) {
    wx.request({
      url: `http://localhost:3000/api/v1/products/${page.currentTarget.dataset.id}`,
      method: 'GET',
      data: {
        "tokens": {
          "token": value
        }
      },
      success: res => {
        console.log(res)
        const product = res.data["user"];
        const farmer = res.data["farmer"];
        console.log(product)
        getApp().globalData.productInfo = product
        getApp().globalData.farmerInfo = farmer
        console.log(getApp().globalData.productInfo)
        // Update local data
        console.log(page.data);
        wx.hideToast();
      }
    });
  }
}

export {
  farmerIndex,
  createProduct,
  shopperIndex,
  shopperShow
};