import React from 'react';
import styles from './CartItem.css';

class CartItem extends React.Component
{
    render = () =>
    {
        return (<div style={styles.cartItem}>{this.props.item.title}: ${this.props.item.price}</div>);
    }
}

export default CartItem