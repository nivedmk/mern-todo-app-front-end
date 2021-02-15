import React, { Component } from "react";
import applicationAPI from "../../apis/applicationAPI";
import { ToastContainer, toast } from "react-toastify";
// import "./logIn.css";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState;
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  defaultState = {
    name: "",
    password: "",
    email: "",
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    const response = await applicationAPI.post("/users/add", this.state);

    if (response.data.message1 !== "error") {
      this.setState(this.defaultState);
      // toast("Successfully added", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
    }
  };

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div
        className="col-md-7 col-lg-6 ml-auto"
        style={{ margin: "auto", display: "block" }}
      >
        <form onSubmit={this.onFormSubmit} autoComplete="off">
          <div className="row">
            <div className="input-group col-lg-6 mb-4">
              <div className="input-group-prepend"></div>
              <input
                id="Name"
                type="text"
                name="Name"
                placeholder="Full Name"
                value={this.state.name}
                onChange={this.onNameChange}
                className="form-control bg-white border-left-0 border-md"
              />
            </div>
            <div className="input-group col-lg-12 mb-4">
              <div className="input-group-prepend"></div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.onEmailChange}
                className="form-control bg-white border-left-0 border-md"
              />
            </div>
            <div className="input-group col-lg-6 mb-4">
              <div className="input-group-prepend"></div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onPasswordChange}
                className="form-control bg-white border-left-0 border-md"
              />
            </div>
            <div className="form-group col-lg-12 mx-auto mb-0">
              <button className="btn btn-primary btn-block py-2">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
