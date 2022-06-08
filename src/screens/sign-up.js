import React from "react";
import {Link, useNavigate} from "react-router-dom";

export default function SignUp () {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/profile')
  }
  return(
    <div className="w-50">
      <h1>Sign Up</h1>
      <input className="form-control mb-2"
             placeholder="username"/>
      <input className="form-control mb-2"
             placeholder="password" type="password"/>
      <input className="form-control mb-2"
             placeholder="verify password" type="password"/>
      <button onClick={handleSignUp}
              className="btn btn-primary w-100">
        Sign Up</button>
      <Link to="/signin">Sign In</Link>
    </div>
  )
}
