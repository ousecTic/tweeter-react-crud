import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = {
    name: "",
    comment: ""
  };

  onChangeUsername = e => {
    this.setState({
      name: e.target.value
    });
  };

  onChangeComment = e => {
    this.setState({
      comment: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      comment: this.state.comment
    };
    await axios
      .post("http://localhost:8080/comment/add", obj)
      .then(res => console.log(res.data));

    this.props.getdata();

    this.setState({
      name: "",
      comment: ""
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Comment</label>
            <input
              type="text"
              className="form-control"
              value={this.state.comment}
              onChange={this.onChangeComment}
            />
          </div>

          <button type="submit" className="btn btn-block btn-primary mt-5 mb-5">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
