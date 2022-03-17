import spacex from "./profile.json";
import {useState} from "react";
const EditProfileScreen = () => {
  const [profile, setProfile] = useState(spacex);
  const toggleYourTuits = (event, yourTuits) => {
    let newProfile = {...profile};
    if(!event.target.checked) {
      delete newProfile.yourTuits[yourTuits];
    } else {
      newProfile.yourTuits[yourTuits] = true;
    }
    setProfile(newProfile);
  }
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
      
      
      {/*<div className="form-check form-switch mb-3 ps-0">*/}
      {/*  <input type="checkbox"*/}
      {/*         onChange={event => setProfile(*/}
      {/*    {...profile, emailNotifications: event.target.checked})}*/}
      {/*         className="form-check-input float-end"*/}
      {/*         role="switch"/>*/}
      {/*    Email notifications*/}
      {/*</div>*/}
      <b>Notification Preferences</b><br/>
      <b className="mt-5">Related to your Tuits</b>
      <div>
        <input type="checkbox" checked={profile.yourTuits["NEW"]}
               onClick={(e) => toggleYourTuits(e, 'NEW')}
               name="your-tuits" className="float-end"/>
        New notifications
      </div>
      <div>
        <input type="checkbox" checked={profile.yourTuits["DIRECT"]}
               onClick={(e) => toggleYourTuits(e, 'DIRECT')}
               name="your-tuits" className="float-end"/>
        Direct messages
      </div>
      <div className="mb-3">
        <input type="checkbox" checked={profile.yourTuits["EMAILED"]}
               onClick={(e) => toggleYourTuits(e, 'EMAILED')}
               name="your-tuits" className="float-end"/>
        Tweets emailed to you
      </div>



      <b>Notification Preferences</b><br/>
      <b className="mt-5">Top Tuits</b>
      <div>
        <input type="radio" checked={profile.topTuits === 'DAILY'}
               onClick={(e) => setProfile(
                 {...profile, topTuits: 'DAILY'})}
               name="topTuits" className="float-end"/>
        Daily
      </div>
      <div>
        <input type="radio" checked={profile.topTuits === 'WEEKLY'}
               onClick={(e) => setProfile(
                 {...profile, topTuits: 'WEEKLY'})}
               name="topTuits" className="float-end"/>
        Weekly
      </div>
      <div>
        <input type="radio" checked={profile.topTuits === 'PERIODICALLY'}
               onClick={(e) => setProfile(
                 {...profile, topTuits: 'PERIODICALLY'})}
               name="topTuits" className="float-end"/>
        Periodically
      </div>
      <div>
        <input type="radio" checked={profile.topTuits === 'OFF'}
               onClick={(e) => setProfile(
                 {...profile, topTuits: 'OFF'})}
               name="topTuits" className="float-end"/>
        Off
      </div>
      {JSON.stringify(profile.topTuits)}
    </div>
  );
}
export default EditProfileScreen;