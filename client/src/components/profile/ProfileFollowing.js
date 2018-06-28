import React, { Component } from "react";
// import PropTypes from "prop-types";
// import isEmpty from "../../validation/is-empty";

class ProfileFollowing extends Component {
  render() {
    //const { profile } = this.props;

    return (
      <div
        style={{
          width: "100%",
          height: "500px",
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
                letterSpacing: "200"
              }}
            >
              F O L L O W I N G
            </h3>

            {/* 
            Come back and alter this to display images 
            <p>
              {isEmpty(profile.bio) ? <span /> : <span>{profile.bio}</span>}
            </p> */}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

//come back and alter this for images
// ProfileAbout.propTypes = {
//   profile: PropTypes.object.isRequired
// };

export default ProfileFollowing;
