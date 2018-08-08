import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';
import productsData from '../data/products';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductList  products={productsData}
    inCart={[]}
    addToCart={_ => {}}
    removeFromCart={_ => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
