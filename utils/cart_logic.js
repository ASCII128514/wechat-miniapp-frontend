const changeFormToOrder = function (e, data={}) {
  const detail = e.product.description || {}
  const unit = e.product.unit || 'kg'
  const price = e.product.product_price || '0'
  const name = e.product.product_name || 'None'
  const url = e.product.picture_url || 'None'
  const quantity = e.buy_num || '0'

  const order = {
    product: {
      unit,
      price,
      name,
      url,
      detail
    },
    quantity: {
      quantity,
    }
  };
  return order
}

const addToCart = function (order) {
  const app = getApp();
  let globalData = app.globalData;
  let g = globalData || {};
  let cart = g.cart || [];
  cart.push(order);
}

const orderTotal = function (cart) {
  let totalPrice = 0;
  console.log(cart)
  cart.forEach((product) => {
    console.log(product)
    let totalProduct = Number.parseInt(product.quantity.quantity) * Number.parseInt(product.product.price);
    totalPrice = totalPrice + totalProduct;

  });
  console.log("price", totalPrice)
  return totalPrice
}

module.exports = {
  changeFormToOrder: changeFormToOrder,
  addToCart: addToCart,
  orderTotal: orderTotal
}


// const app = getApp();
// let globalData = app.globalData

// // pages/cart/cart.js
// formSubmit: (e) => {
//   const order = changeFormToOrder(e)
//   addToCart(order);
// } 
