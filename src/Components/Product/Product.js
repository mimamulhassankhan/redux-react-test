import React from 'react';

const Product = (props) => {
    const {name, id} = props.product;
    const {addToCart} = props
    return (
        <div style={{border:'1px solid tomato', margin:10}}>
            <h4>{name}</h4>
            <button onClick={() => addToCart(id, name)}>Add to Cart</button>
        </div>
    );
};

export default Product;