import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buddy: {
        id: "",
        name: "",
        age: "",
        email: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      buddy: {
        ...this.state.buddy,
        [e.target.name]: e.target.value,
      },
    });
  };

  addFriend = (e) => {
    // e.preventDefault()
    axiosWithAuth()
      .post("/api/friends", this.state.buddy)
      .then((res) => {
        console.log("props", this.props);
        //res.data
        this.setState({
          buddy: {
            ...this.state.buddy,
          },
        });
        this.props.history.push("/friends", res.data);
      })
      .catch((err) => {
        console.log("Error in AddFriend", err);
      });
  };

  render() {
    return (
      <form className="addFriend" onSubmit={this.addFriend}>
        <h2>Add your friend!</h2>
        <input
          className="input"
          text="type"
          name="name"
          placeholder="Name"
          value={this.state.buddy.name}
          onChange={this.handleChange}
        />
        <input
          className="input"
          text="type"
          name="age"
          placeholder="Age"
          value={this.state.buddy.age}
          onChange={this.handleChange}
        />
        <input
          className="input"
          text="type"
          name="email"
          placeholder="Email"
          value={this.state.buddy.email}
          onChange={this.handleChange}
        />
        <button>Add Friend</button>
      </form>
    );
  }
}

export default AddFriend;
