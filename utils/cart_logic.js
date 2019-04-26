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

module.exports = {
  changeFormToOrder: changeFormToOrder,
  addToCart: addToCart
}

// const app = getApp();
// let globalData = app.globalData

// // pages/cart/cart.js
// formSubmit: (e) => {
//   const order = changeFormToOrder(e)
//   addToCart(order);
// } 
