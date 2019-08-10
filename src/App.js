import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import PizzaBuilder from "./components/PizzaBuilder/PizzaBuilder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <PizzaBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
