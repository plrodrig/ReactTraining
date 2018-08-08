import React from 'react';
import Product from './Product';
import styles from './ProductList.css'

/*function ProductList(props) {
    return (<ul style={styles.productList}>
        {props.products.map((product) => (
            <li key={product.id}
                style={styles.productListItem}>
                <Product product={product}
                    isInCart={props.inCart.includes(product.id)}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart} />
            </li>
        ))}</ul>);
}*/

class ProductList extends React.Component {
    render() {
        console.log("ProductList.render(): this.props = %O", this.props)
        const inCart = this.props.inCart;
        let products = this.props.products;
        if (products === undefined)
            return (<p>Empty</p>);
        console.log("ProductList.render(): product count before filter: %d", products.length);
        products = products.filter(product => product !== undefined);
        console.log("ProductList.render(): product count after filter: %d", products.length);
        return (
            <ul style={styles.productList}>
                {products.map(product => (
                        <li key={product.id} style={styles.productListItem}>
                            <Product {...product}
                                inCart={inCart.includes(product.id)}
                                addToCart={this.props.addToCart}
                                removeFromCart={this.props.removeFromCart}
                            />
                        </li>
                    ))}
            </ul>
        );
    }
}

export default ProductList;