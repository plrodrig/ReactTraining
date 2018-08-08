import React from 'react';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';
import './App.css';
import productsData from '../data/products';

class App extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
    this.addToCart = this.addToCart.bind(this);
  }

  render = () => {
    return (
      <div className="container">
        <header className="row">
          <div className="col-md-12">
            <h1>Welcome to React Bookstore</h1>
          </div>
        </header>
        <div className="row">
          <div className="col-md-8">
            <ProductList products={productsData}
              inCart={this.state.items}
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart} />
          </div>
          <div className="col-md-4">
            <Cart products={productsData} inCart={this.state.items} />
          </div>
        </div>
        <footer>
        </footer>
      </div>
    );
  }

  addToCart = (productId) => {
    console.log("addToCart(id: %s)", productId);
    if (!productId)
      return;
    let newItems = [...this.state.items, productId]
    this.setState({ items: newItems });
  }

  removeFromCart = (productId) => {
    console.log("removeFromCart(id: %s)", productId);
    if (!productId)
      return;

    var newItems = this.state.items
    var index = newItems.indexOf(productId);
    if (index > -1)
      newItems.splice(index, 1);
    this.setState({ items: newItems });
  }
}

export default App;
