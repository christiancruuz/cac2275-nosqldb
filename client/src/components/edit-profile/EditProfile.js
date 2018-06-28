import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
// import InputGroup from "../common/InputGroup";
// import SelectListGroup from "../common/SelectListGroup";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      team: "",
      location: "",
      bio: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      profile.team = !isEmpty(profile.team) ? profile.team : "";
      profile.location = !isEmpty(profile.location) ? profile.location : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";

      this.setState({
        handle: profile.handle,
        team: profile.team,
        location: profile.location,
        bio: profile.bio
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      team: this.state.team,
      location: this.state.location,
      bio: this.state.bio
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div style={{ marginTop: "100px", height: "800px" }}>
        <div>
          <div>
            <div>
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1
                style={{
                  fontSize: "25px",
                  textAlign: "center",
                  fontFamily: "'Roboto', sans-serif",
                  marginTop: "30px",
                  letterSpacing: "200"
                }}
              >
                Edit Your Portfolio
              </h1>
              <form onSubmit={this.onSubmit}>
                <div style={{ marginLeft: "400px", marginBottom: "50px" }}>
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "20px",
                      marginLeft: "-63px"
                    }}
                  >
                    Designer Name
                  </p>
                  <TextFieldGroup
                    placeholder="*"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    error={errors.handle}
                    info=""
                  />
                </div>

                <div style={{ marginLeft: "400px", marginBottom: "50px" }}>
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "20px",
                      marginLeft: "-63px"
                    }}
                  >
                    {" "}
                    Team{" "}
                  </p>
                  <TextFieldGroup
                    placeholder=""
                    name="team"
                    value={this.state.team}
                    onChange={this.onChange}
                    error={errors.team}
                    info=""
                  />
                </div>

                <div style={{ marginLeft: "400px", marginBottom: "50px" }}>
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "20px",
                      marginLeft: "-63px"
                    }}
                  >
                    {" "}
                    Location{" "}
                  </p>
                  <TextFieldGroup
                    placeholder=""
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                    error={errors.location}
                    info=""
                  />
                </div>

                <div
                  style={{
                    marginLeft: "337px",
                    width: "470px",
                    height: "300px",
                    marginBottom: "-100px"
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "20px",
                      marginLeft: ""
                    }}
                  >
                    {" "}
                    Bio{" "}
                  </p>
                  <TextAreaFieldGroup
                    placeholder=""
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    error={errors.bio}
                    info=""
                  />
                </div>
                <small style={{ marginLeft: "500px" }}>
                  * = required fields
                </small>
                <br />
                <input
                  type="submit"
                  value="Submit"
                  style={{
                    borderStyle: "solid",
                    borderWidth: "2px",
                    borderColor: "#574904",
                    borderRadius: "0",
                    marginLeft: "490px",
                    width: "150px",
                    color: "black"
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(CreateProfile));
