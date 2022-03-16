import React from "react";
import ShoppingCartItemClass from "./shopping-cart-item-class";
class ShoppingCartClassComponent extends React.Component {
  
  state = {
    products: [
      {name: 'Laptop', price: 1000, quantity: 1},
      {name: 'Books', price: 150, quantity: 2},
      {name: 'Notebooks', price: 10, quantity: 3}
    ]
  }
  
  render () {
    return(
      <div>
        <h2>Shopping Cart Class Component</h2>
        Products in cart: {this.state.products.length}
        <ul className="list-group">
          <li className="list-group-item">
            <div className="row">
              <div className="col">Name</div>
              <div className="col text-end">Price</div>
              <div className="col text-end">Quantity</div>
              <div className="col text-end">Total</div>
            </div>
          </li>
          {
          this.state.products.map(product =>
            <ShoppingCartItemClass product={product}/>
          )
        }
          <li className="list-group-item">
            <div className="row">
              <div className="col">Total</div>
              <div className="col text-end"></div>
              <div className="col text-end">
                {
                  this.state.products.reduce((quantity, product) => {
                    return quantity + product.quantity;
                  }, 0)
                }
              </div>
              <div className="col text-end">
                ${
                  this.state.products.reduce((total, product) => {
                    return total + product.quantity * product.price;
                  }, 0)
                }
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
export default ShoppingCartClassComponent;