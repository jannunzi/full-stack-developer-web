import React from "react";
import {Link, Outlet, useLocation} from "react-router-dom";

function Navigation() {
  const {pathname} = useLocation();
  const isActive = (path) => pathname.indexOf(path) >= 0 ? 'active':'';
  return(
    <div className="row mt-2">
      <div className="col-3">
        <div className="list-group">
          <Link
            to="/tuiter/home"
            className={`list-group-item ${isActive('home')}`}>
            Home
          </Link>
          <Link
            to="/tuiter/explore"
            className={`list-group-item ${isActive('explore')}`}>
            Explore
          </Link>
          <Link
            to="/tuiter/notifications"
            className={`list-group-item ${isActive('notifications')}`}>
            Notifications
          </Link>
        </div>
      </div>
      <div className="col-9">
        <Outlet/>
      </div>
    </div>
  )
}
export default Navigation;
