const changeFormToOrder = function (e, data={}) {
  const detail = e.detail.value || {}
  const unit = e.detail.unit || 'kg'
  const price = e.detail.price || '0'
  const name = e.detail.name || 'None'
  const url = e.detail.url || 'None'
  const quantity = data.buy_num || '0'

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
