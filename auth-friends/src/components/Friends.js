import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";
import { Route } from "react-router-dom";

import "../App.scss";

class Friends extends React.Component {
  state = {
    friends: [],
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log({ res });
        //res.data
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log("Error in Friends", err);
      });
  };
  render() {
    return (
      <>
        <h1>friends</h1>
        <Route component={AddFriend} />
        <div className="friends">
          {this.state.friends.map((friend) => {
            return (
              <div className="friend">
                <h3>{friend.name}</h3>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Friends;
