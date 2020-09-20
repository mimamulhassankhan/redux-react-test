import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    const {cart, product, addToCart} = props;
    return (
        <div>
            {
                product.map(pd => <Product product={pd} key={pd.id} addToCart={addToCart}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return { 
        cart : state.cart, 
        product: state.product
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}

export default connect(mapStateToProps, mapDispatchToProps) (Shop);