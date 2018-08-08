import React from 'react';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';
import './App.css';
//import productsData from '../data/products';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      //products:[...this.shuffleArray(productsData)]  
      products: []    
      };
      this.sortedProducts = []; 
  }

  render = () => {
    console.log("App.render(): this.state = %O" ,this.state);
    return (
      <div className="container">
        <header className="row">
          <div className="col-md-12">
            <h1>Welcome to React Bookstore</h1>
          </div>
        </header>
        <div className="row">
          <div className="col-md-8">
            <ProductList products={this.state.products}
              inCart={this.state.items}
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart} />
          </div>
          <div className="col-md-4">
            <Cart products={this.state.products} inCart={this.state.items} />
          </div>
        </div>
        <footer>
        </footer>
      </div>
    );
  }

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }


  addToCart = (productId) => {
    console.log("addToCart(id: %s)", productId);
    if (!productId)
      return;

    const newItems = [...this.state.items, productId]
    this.setState({ items: newItems });
  }

  removeFromCart = (productId) => {
    console.log("removeFromCart(id: %s)", productId);
    if (!productId)
      return;

    const newItems = this.state.items.filter(id => id !== productId);
    this.setState({ items: newItems });
  }

  componentDidMount() {
    fetch('http://localhost:3000/products.json')
      .then(response => response.json()
        .then(products => this.shuffleArray(products))
        .then(products => {console.log("ComponentDidMount callback: %O" ,products); 
          this.setState({ products: products })
        }))
  }
}

export default App;
