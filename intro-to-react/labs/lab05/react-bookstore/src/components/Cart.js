import React from 'react';
import CartItem from './CartItem';
import styles from './Cart.css';

class Cart extends React.Component {
    render = () => {
        const pricesInCart = this.props.inCart.map(item => this.getProduct(item).price);
        let total = 0;
        pricesInCart.forEach(element => {
            total += Number(element);
        });
        console.log ("Cart.render(): this.props.inCart = %O", this.props.inCart);
        return (<div style={styles.cart}>
            <h1>Cart</h1>
            {this.props.inCart.map(productId => (<CartItem key={productId} item={this.getProduct(productId)} />))}
            <p>Total: ${total} USD</p>
        </div>);
    }

    getProduct = (item) => {
        const product = this.props.products.find(product => item === product.id);
        console.log("getProduct(item: %s); returns %O", item, product);
        return product;
    }
}

export default Cart;