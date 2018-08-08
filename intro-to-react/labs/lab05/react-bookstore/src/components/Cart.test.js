import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';
import productsData from '../data/products';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart products={productsData} inCart={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
