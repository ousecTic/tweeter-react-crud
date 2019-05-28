import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" placeholder="username" />
          </div>
          <div class="form-group">
            <label>Comment</label>
            <input type="password" class="form-control" placeholder="Comment" />
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
