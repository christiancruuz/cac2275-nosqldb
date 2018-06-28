import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div style={{ marginTop: "300px", marginLeft: "250px" }}>
        <div className="login">
          <p
            className="lead text-center"
            style={{
              marginRight: "300px",
              marginBottom: "40px",
              fontFamily: "'Roboto', sans-serif"
            }}
          >
            Sign in to your Uni-ke account
          </p>
          <div
            style={{
              marginTop: "5px",
              width: "550px",
              height: "840px"
            }}
          >
            <form onSubmit={this.onSubmit} style={{ marginLeft: "100px" }}>
              <p
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "22px",
                  marginLeft: "-63px"
                }}
              >
                Email
              </p>
              <TextFieldGroup
                placeholder=""
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />

              <br />
              <br />
              <p
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "22px",
                  marginLeft: "-63px"
                }}
              >
                Password
              </p>
              <TextFieldGroup
                placeholder=""
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
              />
              <input
                type="submit"
                style={{
                  marginTop: "40px",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  borderColor: "#574904",
                  borderRadius: "0",
                  marginLeft: "100px",
                  width: "150px",
                  color: "#574904"
                }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
