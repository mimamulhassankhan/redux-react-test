import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/cartActions';

const Cart = (props) => {
    // console.log(props.removeFromCart);
    return (
        <div>
            <ul>
                {
                     props.cart.map((pd, idx) => <li key={idx}>{pd.name} <button onClick={() => props.removeFromCart(pd.cartId)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return { 
        cart : state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart : removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);