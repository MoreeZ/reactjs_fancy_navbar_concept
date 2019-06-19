import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  state = {};
  handleReturnHome = e => {
    this.props.resetPages();
    const aboutMe = document.getElementById("about-me");
    const aboutMeBox = document.querySelector(".about-me-box");
    aboutMeBox.style.transform = "translateX(100%)";
    const home = document.getElementById("home");
    home.style.filter = "brightness(100%)";
    const buttonCords = document
      .querySelector(".nav-about-me")
      .firstChild.getBoundingClientRect();
    const backToHome = document.querySelector(".backtohome");
    backToHome.style.width = `0px`;
    setTimeout(() => {
      aboutMeBox.style.display = "none";
      aboutMeBox.style.transform = "skew(20deg) translateY(-100%)";
    }, 400);
    setTimeout(() => {
      aboutMe.style.transition = "transform 400ms";
      aboutMeBox.style.display = "block";
      aboutMeBox.style.width = "150px";
      aboutMeBox.style.left = `${buttonCords.left +
        0.3639702343 * (window.innerHeight / 2)}px`;
    }, 500);
  };
  render() {
    return (
      <div id="home" className="each-page">
        <div className="home-container">
          <div className="home-text-cont">
            <h1 className="myname">
              <span className="eachword">Oskar</span>{" "}
              <span className="eachword">Mróz</span>
            </h1>
            <h4 className="home-subheading">
              <span className="eachword">Full</span>{" "}
              <span className="eachword">Stack,</span>{" "}
              <span className="eachword">Free</span>{" "}
              <span className="eachword">Lance</span>{" "}
              <span className="eachword">Web</span>{" "}
              <span className="eachword">Developer</span>
            </h4>
          </div>
          <div className="backtohome" onClick={this.handleReturnHome} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    aboutMe: state.aboutMe,
    mySkills: state.mySkills,
    myProjects: state.myProjects,
    contactMe: state.contactMe
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetPages: () => {
      dispatch({ type: "RESET_PAGES" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
