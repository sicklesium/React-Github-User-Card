import React from "react";

const UserCard = props => {
  console.log("card rendered");
  return (
    <div className="user-card">
      <img className="user-image" src={props.image} alt="picture of a handsome man" />
      <div className="user-info">
        <h1 className="username">{props.name}</h1>
        <em className="user-bio">{props.bio}</em>
        <p>Location: {props.location}</p>
        <p>Followers: {props.follower}</p>
        <p>Following: {props.following}</p>
      </div>
    </div>
  );
};

export default UserCard;