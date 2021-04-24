import React from "react";
import "./App.css";
const UserList = (props) => {
  return (
    <div className="profil">
      <p>
        {props.id}
        <br></br>
        {props.name}
        <br></br>
        {props.username}
        <br></br>
        {props.email}
      </p>
    </div>
  );
};
export default UserList;
