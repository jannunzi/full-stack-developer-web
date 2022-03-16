const ConditionalInline = () => {
  const loggedIn = false;
  return (
    <>
      { loggedIn && <h2>Welcome!!</h2>}
      {!loggedIn && <h2>Please login</h2>}
    </>
  );
};
export default ConditionalInline;
