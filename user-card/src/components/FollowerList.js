import React, { Component } from "react";
import axios from "axios";
import FollowerCard from "./FollowerCard";

class FollowerList extends Component {
    constructor() {
        super();
        this.state = { followers: [] };
        console.log("Follower list constructed!");
    }

    componentDidMount() {
        console.log(`Follower list mounted!`);
        axios
            .get(`https://api.github.com/users/sicklesium/followers`)
            .then(response => this.setState({ followers: response.data }))
            .catch(error => console.log("Something went wrong..."));
    }

    componentDidUpdate(prevState, prevProps) {
        if (prevProps !== this.props || prevState !== this.state) {
            axios
                .get(`https://api.github.com/users/sicklesium/followers`)
                .then(response => this.setState({ followers: response.data }))
                .catch(error => console.log("Something went wrong..."));
        }
        console.log(`Follower list updated!`);
    }
    render() {
        console.log(`Follower list rendered!`);
        return (
            <div className="followers-container">
                {this.state.followers
                    ? this.state.followers.map(follower => (
                        <FollowerCard
                            key={follower.login}
                            name={follower.login}
                            image={follower.avatar_url}
                        />
                    ))
                    : null}
            </div>
        );
    }
}

export default FollowerList;