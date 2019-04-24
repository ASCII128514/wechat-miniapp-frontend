// users: what do we do for openId?
const users = [{
  id: 1,
  name: 'Sizhen',
  profile_picture_url: 'https://via.placeholder.com/150',
  description: 'Hi! I\'m selling the best veggies',
  age: 29,
  gender: 1,
  // openId: '' 
}, {
  id: 2,
  name: 'Paul',
  profile_picture_url: 'https://via.placeholder.com/150',
  description: 'Hi! I\'m selling the best fruits',
  age: 18,
  gender: 1,
  // openId:
}, {
  id: 3,
  name: 'Carly',
  profile_picture_url: 'https://via.placeholder.com/150',
  description: 'Hi! I\'m selling nothing',
  age: 29,
  gender: 0,
  // openId:	
}]

const products = [{
  id: 1,
  user_id: 1,
  product_name: 'Sweet Potato',
  product_price: 4,
  product_unit: 'kg',
  category: 'Vegtable',
  description: 'Really good!',
  picture_url: 'https://via.placeholder.com/150'
}, {
  id: 2,
  user_id: 1,
  product_name: 'Onion',
  product_price: 5,
  product_unit: 'piece',
  category: 'Vegtable',
  description: 'Ok',
  picture_url: 'https://via.placeholder.com/150'
}, {
  id: 3,
  user_id: 1,
  product_name: 'Tomatoe',
  product_price: 6,
  product_unit: 'grams',
  category: 'Fruit',
  description: 'Delicious',
  picture_url: 'https://via.placeholder.com/150'
}, {
  id: 4,
  user_id: 2,
  product_name: 'Apple',
  product_price: 7,
  product_unit: 'kg',
  category: 'Fruit',
  description: 'I\'ve had better',
  picture_url: 'https://via.placeholder.com/150'
}, {
  id: 5,
  user_id: 2,
  product_name: 'Pear',
  product_price: 8,
  product_unit: 'kg',
  category: 'Fruit',
  description: 'Juicy',
  picture_url: 'https://via.placeholder.com/150'
}, {
  id: 6,
  user_id: 2,
  product_name: 'Banana',
  product_price: 6,
  product_unit: 'piece',
  category: 'Fruit',
  description: 'Banana-y',
  picture_url: 'https://via.placeholder.com/150'
}, {
  id: 7,
  user_id: 2,
  product_name: 'Pineapple',
  product_price: 7,
  product_unit: 'kg',
  category: 'Fruit',
  description: 'So good you can put it on a stick',
  picture_url: 'https://via.placeholder.com/150'
}, {
  id: 8,
  user_id: 2,
  product_name: 'Pork',
  product_price: 8,
  product_unit: 'kg',
  category: 'Meat',
  description: 'Get that bacon sizzlin\'',
  picture_url: 'https://via.placeholder.com/150'
}]

const price_histories = [{
  id: 1,
  product_id: 2,
  previous_price: 4
}, {
  id: 2,
  product_id: 2,
  previous_price: 6
}, {
  id: 3,
  product_id: 5,
  previous_price: 10
}]

const listings = [{
  id: 1,
  user_id: 1,
  product_id: 1,
  quantity: 10
}, {
  id: 2,
  user_id: 1,
  product_id: 2,
  quantity: 20
}, {
  id: 3,
  user_id: 1,
  product_id: 3,
  quantity: 30
}, {
  id: 4,
  user_id: 2,
  product_id: 4,
  quantity: 40
}, {
  id: 5,
  user_id: 2,
  product_id: 5,
  quantity: 50
}, {
  id: 6,
  user_id: 2,
  product_id: 6,
  quantity: 45
}, {
  id: 7,
  user_id: 2,
  product_id: 7,
  quantity: 35
}, {
  id: 8,
  user_id: 2,
  product_id: 8,
  quantity: 25
}]

const orders = [{
  id: 1,
  product_id: 1,
  shopping_cart_id: 1,
  quantity: 1,
  description: "Please cut product"
}, {
  id: 2,
  product_id: 5,
  shopping_cart_id: 1,
  quantity: 10,
  description: "Make sure it's clean!"
}, {
  id: 3,
  product_id: 2,
  shopping_cart_id: 2,
  quantity: 5,
  description: "Don't squish anything"
}]

const shopping_carts = [{
  id: 1,
  user_id: 3,
  description: "Make sure it's deliverd by Tuesday",
}, {
  id: 2,
  user_id: 2,
  description: "Just trying my competitor's food.",
}]



module.exports = {
  users,
  products,
  price_histories,
  listings,
  orders,
  shopping_carts
}

// index.js

// import {users, products} from './mock.js'

