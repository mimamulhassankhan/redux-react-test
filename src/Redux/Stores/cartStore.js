const { createStore } = require("redux");
const { default: cartReducers } = require("../Reducers/cartReducers");

export const cartStore = createStore(cartReducers);