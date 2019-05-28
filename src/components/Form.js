import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div class="form-group">
            <label>Username</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
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
