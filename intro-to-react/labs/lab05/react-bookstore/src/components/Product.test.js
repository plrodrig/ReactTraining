import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import productsData from '../data/products';

it('renders without crashing', () => {
  const product = productsData[0];
  const div = document.createElement('div');
  ReactDOM.render(<Product product={product}
    isInCart={false}
    addToCart={_=>{}}
    removeFromCart={_=>{}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
