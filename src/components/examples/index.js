import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalIfElse
  from "./conditional-rendering/conditional-ifelse";
import ConditionalInline from "./conditional-rendering/conditional-inline";
import ShoppingCartClassComponent from "./class-components/shopping-cart-class-component";
import ShoppingCartFunctionalComponent
  from "./shopping-cart/cart-functional/shopping-cart-functional-component";
const Examples = () => {
  return(
    <div>
      <h1>Examples</h1>
      <ShoppingCartFunctionalComponent/>
      <ShoppingCartClassComponent/>
      <ConditionalInline/>
      <ConditionalIfElse/>
      <Link to="/hello">Hello</Link>
      <Styles/>
      <Classes/>
    </div>
  );
}
export default Examples;