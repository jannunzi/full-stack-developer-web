import React from "react";
import {Link, useNavigate} from "react-router-dom";

function Profile () {
  const nav = useNavigate();
  const logout = () => {
    nav('/signin');
  }
  return(
    <div className="w-50">
      <h1>Profile</h1>
      Username:
      <input className="form-control mb-2"
             readOnly value="alice"
             placeholder="username"/>
      First Name:
      <input className="form-control mb-2"
             placeholder="first name" value="Alice"/>
      Last Name:
      <input className="form-control mb-2"
             placeholder="last name" value="Wonderland"/>
      <button onClick={logout} className="btn btn-danger w-100 mt-2">
        Logout</button>
      <Link to="/home">Home</Link>
    </div>
  )
}
export default Profile;
