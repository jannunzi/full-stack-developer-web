import React from "react";
export default class ShoppingCartItemClass
  extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.product
  }
  render() {
    return(
      <li className="list-group-item">
        <div className="row">
          <div className="col">{this.state.name}</div>
          <div className="col text-end">${this.state.price}</div>
          <div className="col text-end">{this.state.quantity}</div>
          <div className="col text-end">${this.state. price * this.state.quantity}</div>
        </div>
      </li>
    );
  }
}