import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div
        style={{
          width: "100%",
          height: "420px",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "#574904",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none"
        }}
      >
        <div>
          <div>
            <h3
              style={{
                fontSize: "25px",
                textAlign: "center",
                fontFamily: "'Roboto', sans-serif",
                marginTop: "20px",
                marginLeft: "90px",
                letterSpacing: "200"
              }}
            >
              B I O G R A P H Y
            </h3>
            <p>
              {isEmpty(profile.bio) ? <span /> : <span>{profile.bio}</span>}
            </p>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
