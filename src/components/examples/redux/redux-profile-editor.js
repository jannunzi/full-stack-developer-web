// import profile from "./profile.json";
import {useState} from "react";
import spacex from "../state/profile.json";

const ReduxProfileEditor = () => {
  const [profile, setProfile] = useState(spacex);
  return(
    <div>
      <h2>Edit Profile</h2>
      <input value={profile.username} readOnly className="form-control mb-1"/>
      <input value={profile.password}
             onChange={(e) =>
               setProfile({...profile, password: e.target.value})}
             type="password" className="form-control mb-1"/>
      <input value={profile.firstName}
             onChange={(e) =>
               setProfile({...profile, firstName: e.target.value})}
             className="form-control mb-1"/>
      <input value={profile.lastName}
             onChange={(e) =>
               setProfile({...profile, lastName: e.target.value})}
             className="form-control mb-1"/>
      <textarea value={profile.bio}
                onChange={(e) =>
                  setProfile({...profile, bio: e.target.value})}
                className="form-control mb-1"></textarea>
    </div>
  );
}
export default ReduxProfileEditor;