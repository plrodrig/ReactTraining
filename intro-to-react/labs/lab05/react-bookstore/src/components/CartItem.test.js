import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';
import productsData from '../data/products';

it('renders without crashing', () => {
  const product = productsData[0];
  const div = document.createElement('div');
  ReactDOM.render(<CartItem key={0} item={product} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
