import spacex from "./profile.json";
import {useState} from "react";
const EditProfileScreen = () => {
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
      <input type="date" value={profile.dob} className="form-control mb-1"
        onChange={(e) => setProfile(
          {...profile, dob: e.target.value})}/>
      <select value={profile.role}
        onChange={(e) => setProfile(
          {...profile, role: e.target.value})}
        className="form-control mb-1">
        <option value="CEO">CEO</option>
        <option value="MANAGER">Manager</option>
        <option value="TRUCKER">Trucker</option>
        <option value="ENGINEER">Engineer</option>
        <option value="WELDER">Welder</option>
      </select>
      <b>Email Notifications</b>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch"
               id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Default
            switch checkbox input</label>
      </div>
      <div>
        <input type="checkbox" className="float-end"/>
        New notifications
      </div>
      <div>
        <input type="checkbox" className="float-end"/>
        Direct messages
      </div>
      <div>
        <input type="checkbox" className="float-end"/>
        Tweets emailed to you
      </div>

      <div>
        <input type="radio" className="float-end"/>
        Daily
      </div>
      <div>
        <input type="radio" className="float-end"/>
        Weekly
      </div>
      <div>
        <input type="radio" className="float-end"/>
        Periodically
      </div>
      <div>
        <input type="radio" className="float-end"/>
        Off
      </div>
      {profile.dob}
      {profile.role}
    </div>
  );
}
export default EditProfileScreen;