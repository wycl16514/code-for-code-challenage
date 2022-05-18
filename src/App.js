import Products from "./components/Products";
import Cart from "./components/Cart"
import {observer} from 'mobx-react'
import React from "react";


@observer 
class App extends React.Component {
  render() {
    return (
      <div>
      <h1>Shopping Cart Example</h1>
      <hr/>
      <Products/>
      <hr/>
      <Cart />
    </div>
    )
  }
}


export default App;
