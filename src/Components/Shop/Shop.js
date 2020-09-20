import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    const { product, addToCart} = props;
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
        product: state.product
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}

export default connect(mapStateToProps, mapDispatchToProps) (Shop);