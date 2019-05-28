import React, { Component } from "react";

class CommentsDisplay extends Component {
  state = {};

  render() {
    return (
      <div style={{ background: "#fff" }} class="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3 text-center">Comment Section</h1>
          <p className="lead text-center mt-5 mb-5">
            Welcome to the Comment Section! Make sure to talk polite with each
            other
          </p>
        </div>
      </div>
    );
  }
}

export default CommentsDisplay;