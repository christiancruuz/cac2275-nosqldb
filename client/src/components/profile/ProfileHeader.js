import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

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
            <div />
            <div className="text-center">
              <h1
                style={{
                  borderStyle: "solid",
                  borderWidth: "2px",
                  borderColor: "#574904",
                  fontSize: "25px",
                  width: "150px",
                  textAlign: "center",
                  fontFamily: "'Roboto', sans-serif",
                  marginLeft: "470px",
                  marginBottom: "-10px"
                }}
              >
                {profile.handle}
              </h1>
              {/* <div className="col-4 col-md-3 m-auto">
                {/* <img
                  className="rounded-circle"
                  src={`${profile.avatar}`}
                  alt=""
                /> 
              </div> */}
              <div
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  marginLeft: "470px",
                  marginBottom: "10px"
                }}
              />
              <h4>{profile.avatar}</h4>

              <div
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "13px",
                  marginTop: "10px"
                }}
              >
                <p>
                  <span>Team: {profile.team} </span>
                </p>
                {isEmpty(profile.location) ? null : (
                  <p>Location: {profile.location}</p>
                )}
                <p>Uni-ke Designs: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
