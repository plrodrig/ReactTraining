import React, { Component } from 'react';
import reactLogo from './logo.svg';
import reduxLogo from './redux.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { People } from './People'
import { store } from './state/store';

class App extends Component {

  constructor() {
    super();
    this.store = store;
    this.state = { ...store.getState() };
    this.store.subscribe(this.rerender);
  }
  render() {
    return (
      <main>
        <div className="App">
          <header className="App-header"> 
          <img src={reactLogo} className="App-logo" alt="react logo" />
          <img src={reduxLogo} className="App-redux-logo" alt="redux logo" />
          <h1 className="App-title">Welcome to React with Redux</h1>
          </header>
          <button onClick={this.getNewPeople}>Get new people</button>
          <People people={this.state.people} />
        </div>
      </main>
    );
  }

  getNewPeople() {
    store.dispatch({ type: "FETCH_NEW_PEOPLE" });
  }

  rerender = () => {
    this.setState(this.store.getState());
  }
}

export default App;
