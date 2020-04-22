import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";
import { Route } from "react-router-dom";

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
      <div>
        <h1>friends</h1>
        {this.state.friends.map((friend) => {
          return (
            <div>
              <h3>{friend.name}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Friends;
