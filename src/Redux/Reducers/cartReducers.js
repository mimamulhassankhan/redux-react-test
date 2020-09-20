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
            return { 
                cart : [...state.cart, actions.id],
                product : state.product
            }
        case REMOVE_FROM_CART:
            const remainingItems = state.cart.filter(pd => pd.id !== actions.id);
            return{ 
                cart: remainingItems
            }
        default:
            return state;
    }
}

export default cartReducers;