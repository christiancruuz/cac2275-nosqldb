import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
// import InputGroup from "../common/InputGroup";
// import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileActions";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      avatar: "",
      team: "",
      location: "",
      bio: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      avatar: this.state.avatar,
      team: this.state.team,
      location: this.state.location,
      bio: this.state.bio
    };

    console.log(profileData);

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFileUpload(e) {
    this.setState({ avatar: e.target.files[0].name });
    console.log(e.target.files[0]);
  }

  render() {
    const { errors } = this.state;

    return (
      <div style={{ marginTop: "200px", height: "1200px" }}>
        <div className="create-profile">
          <div>
            <div>
              <div>
                <h1
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "30px",
                    marginLeft: "450px"
                  }}
                >
                  Create Your Profile
                </h1>
                <p
                  style={{
                    font: "italic 15px Linotype, Didot",
                    marginLeft: "385px"
                  }}
                >
                  Let's get some information to make your portfolio stand out
                </p>

                <form onSubmit={this.onSubmit} style={{ marginTop: "50px" }}>
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

                  <input
                    type="file"
                    name="selectedFile"
                    onChange={this.onFileUpload}
                  />

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
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
