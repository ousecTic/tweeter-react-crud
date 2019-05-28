import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    comment: ""
  };

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  onChangeComment = e => {
    this.setState({
      comment: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <form>
          <div class="form-group">
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div class="form-group">
            <label>Comment</label>
            <input
              type="text"
              class="form-control"
              value={this.state.comment}
              onChange={this.onChangeComment}
            />
          </div>

          <button type="submit" class="btn btn-block btn-primary mt-5 mb-5">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
