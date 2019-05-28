import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form.js";
import CommentsDisplay from "./components/CommentsDisplay";
import axios from "axios";

class App extends Component {
  state = {
    comments: []
  };

  updateParentState = async () => {
    await axios.get("http://localhost:8080/comment").then(response => {
      this.setState({ comments: response.data });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center m-5 text-primary">Tweeter</h1>
        <Form getdata={this.updateParentState} />
        <CommentsDisplay comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
