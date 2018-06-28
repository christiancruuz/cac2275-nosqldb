import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        {" "}
        <p
          className="lead text-center"
          style={{ marginTop: "200px", fontFamily: "'Roboto', sans-serif" }}
        >
          Create Your Uni-ke Account
        </p>
        <div
          style={{
            marginTop: "5px",
            width: "550px",
            height: "800px",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "#574904"
          }}
          className="mx-auto"
        >
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <form noValidate onSubmit={this.onSubmit}>
                    <div style={{ marginTop: "60px" }}>
                      <p
                        style={{
                          fontFamily: "'Roboto', sans-serif",
                          fontSize: "22px",
                          marginLeft: "-63px"
                        }}
                      >
                        Name
                      </p>
                      <TextFieldGroup
                        placeholder=""
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.name}
                      />
                    </div>
                    <div style={{ marginTop: "60px" }}>
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
                    </div>
                    <div style={{ marginTop: "60px" }}>
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
                    </div>
                    <div style={{ marginTop: "60px" }}>
                      <p
                        style={{
                          fontFamily: "'Roboto', sans-serif",
                          fontSize: "22px",
                          marginLeft: "-63px"
                        }}
                      >
                        Confirm Password
                      </p>
                      <TextFieldGroup
                        placeholder=""
                        name="password2"
                        type="password"
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={errors.password2}
                      />
                    </div>
                    <input
                      type="submit"
                      className="btn"
                      style={{
                        borderStyle: "solid",
                        borderWidth: "2px",
                        borderColor: "#574904",
                        borderRadius: "0",
                        marginTop: "70px",
                        marginLeft: "100px",
                        width: "150px",
                        color: "#574904",
                        fontFamily: "'Roboto', sans-serif"
                      }}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
