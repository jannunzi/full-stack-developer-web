import ShoppingCartItemFunction from "./shopping-cart-item-function";
import cart from "./cart.json";
import React, {useState} from "react";

const ShoppingCartFunctionalComponent = () => {
  const [products, setProducts] = useState(cart);
  const [newProduct, setNewProduct] = useState({
    name: 'Pencil', price: '0.5', quantity: 1
  });
  const addToCart = () => {
    setProducts([
      newProduct, ...products
    ]);
  }
  return (
    <div>
      <h2>Shopping Cart Functional Component</h2>
      Products in cart: {products.length}
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <input onChange={(event) =>
                setNewProduct({
                  ...newProduct, name: event.target.value
              })} className="form-control"/>
            </div>
            <div className="col">
              <input onChange={(event) =>
                setNewProduct({
                  ...newProduct, price: event.target.value
              })} className="form-control"/>
            </div>
            <div className="col">
              <input onChange={(event) =>
                setNewProduct({
                  ...newProduct, quantity: event.target.value
              })} className="form-control"/>
            </div>
            <div className="col">
              <button onClick={addToCart} className="btn btn-primary">Add</button>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">Name</div>
            <div className="col text-end">Price</div>
            <div className="col text-end">Quantity</div>
            <div className="col text-end">Total</div>
          </div>
        </li>
        {
          products.map(product =>
            <ShoppingCartItemFunction product={product}/>
          )
        }
        <li className="list-group-item">
          <div className="row">
            <div className="col">Total</div>
            <div className="col text-end"></div>
            <div className="col text-end">
              {
                products.reduce((quantity, product) => {
                  return quantity + product.quantity;
                }, 0)
              }
            </div>
            <div className="col text-end">
              ${
              products.reduce((total, product) => {
                return total + product.quantity * product.price;
              }, 0)
            }
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default ShoppingCartFunctionalComponent;