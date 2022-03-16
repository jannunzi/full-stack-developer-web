import React from "react";
const ShoppingCartItemFunction = ({product}) => {
  return(
    <li className="list-group-item">
      <div className="row">
        <div className="col">{product.name}</div>
        <div className="col text-end">${product.price}</div>
        <div className="col text-end">{product.quantity}</div>
        <div className="col text-end">${product.price * product.quantity}</div>
      </div>
    </li>
  );
}
export default ShoppingCartItemFunction;