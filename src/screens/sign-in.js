import React from "react";
import {Link, useNavigate} from "react-router-dom";

export default function SignIn () {
  const navigate = useNavigate();
  const username = 'alice';
  const handleSignIn = () => {
    if (username === 'alice') {
      navigate('/profile');
    }
  }

  return(
    <div className="w-50">
      <h1>Sign In</h1>
      <input className="form-control mb-2"
             placeholder="username"/>
      <input className="form-control mb-2"
             placeholder="password" type="password"/>
      <button onClick={handleSignIn}
              className="btn btn-primary w-100">
        Sign In</button>
      <Link to="/signup">Sign Up</Link>
    </div>
  )
}
