import React from "react";

const FollowerCards = props => {
    console.log("Card rendered.");
    return (
        <div className="follower-card">
            <img className="follower-image" src={props.image} alt="picture of a follower" />
            <h3>{props.name}</h3>
        </div>
    );
};

export default FollowerCards;