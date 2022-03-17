import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalIfElse
  from "./conditional-rendering/conditional-ifelse";
import ConditionalInline from "./conditional-rendering/conditional-inline";
import ShoppingCartClassComponent from "./shopping-cart/cart-classes/shopping-cart-class-component";
import ShoppingCartFunctionalComponent
  from "./shopping-cart/cart-functional/shopping-cart-functional-component";
import TuitLikesCounter from "./state/tuit-likes-counter";
import EditProfileScreen from "./state/edit-profile-screen";
const Examples = () => {
  return(
    <div>
      <h1>Examples</h1>
      <EditProfileScreen/>
      <TuitLikesCounter/>
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