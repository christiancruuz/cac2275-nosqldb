import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import unike from "../../img/unikelogo.png";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const navStyles = {
      backgroundColor: "#F2F2F2",
      height: "80px",
      boxShadow: "0px -1px 6px 2px gray"
    };

    // const { isAuthenticated, user } = this.props.auth;

    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/profiles"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="/feed"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            Design
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="/feed"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            Region
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/feed"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            Trending
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/feed"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            New
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/dashboard"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            Friends
          </Link>
        </li>
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/profiles"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            {" "}
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/feed"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            Design
          </Link>
        </li>
        <Link
          className="nav-link"
          to="/feed"
          style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
        >
          Region
        </Link>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/feed"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            Trending
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/feed"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            New
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/dashboard"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            Friends
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/register"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/login"
            style={{ color: "#574904", font: "italic 15px Linotype, Didot" }}
          >
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm fixed-top" style={navStyles}>
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              color: "#574904",
              marginLeft: "-100px",
              fontFamily: "'Roboto', sans-serif",
              fontSize: "25px",
              letterSpacing: "14px"
            }}
          >
            U N I - K E
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <img
                src={unike}
                alt="Uni-ke logo"
                style={{ width: "50px", height: "50px", marginLeft: "60px" }}
              />
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
