const ConditionalIfElse = () => {
  const loggedIn = true;
  if(loggedIn) {
    return(<h2>Welcome!!</h2>);
  } else {
    return (<h2>Please login</h2>);
  }
};
export default ConditionalIfElse;
