import React from 'react';
import Product from './Product';
import styles from './ProductList.css'

function ProductList(props) {
    let ml = (<ul style={styles.productList}>
        {props.products.map((product) => (
            <li key={product.id}
                style={styles.productListItem}>
                <Product product={product}
                    isInCart={props.inCart.includes(product.id)}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart} />
            </li>
        ))}</ul>);
    return ml;
}

export default ProductList;