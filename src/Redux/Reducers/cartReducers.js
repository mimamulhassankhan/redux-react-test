const { ADD_TO_CART, REMOVE_FROM_CART } = require("../Actions/cartActions")

const initialState = {
    cart : [],
    product : [
        {name: 'Lenovo Laptop' , id: 1},
        {name: 'HP Laptop' , id: 2},
        {name: 'Toshiba Laptop' , id: 3},
        {name: 'Dell Laptop' , id: 4},
        {name: 'Asus Laptop' , id: 5},]
}

const cartReducers = (state = initialState, actions) =>  {
    switch(actions.type){
        case ADD_TO_CART:
            const newProductInfo = {
                productId : actions.id,
                name: actions.name,
                cartId : state.cart.length +1
            }
            return {
                ...state,
                cart : [...state.cart, newProductInfo]
            }
        case REMOVE_FROM_CART:
            console.log(state, actions.id)
            const remainingItems = state.cart.filter(pd => pd.cartId !== actions.id);
            return{ 
                ...state,
                cart: remainingItems
            }
        default:
            return state;
    }
}

export default cartReducers;