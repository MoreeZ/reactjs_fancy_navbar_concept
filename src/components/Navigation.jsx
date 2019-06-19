import React, { Component } from "react";
import { connect } from "react-redux";

class Navigation extends Component {
  handleOpenAboutMe = e => {
    if (!this.props.aboutMe) {
      this.props.setAboutMe();
      const aboutMe = document.getElementById("about-me");
      const aboutMeBox = document.querySelector(".about-me-box");
      const buttonCords = document
        .querySelector(".nav-about-me")
        .firstChild.getBoundingClientRect();
      const home = document.getElementById("home");

      const backToHome = document.querySelector(".backtohome");

      aboutMeBox.style.width = "150px";
      console.log(e.target);
      aboutMeBox.style.left = `${buttonCords.left +
        0.3639702343 * (window.innerHeight / 2)}px`;
      aboutMe.style.left = `-${buttonCords.left}px`;
      aboutMeBox.style.transform = `skew(20deg) translateY(0%)`;
      setTimeout(() => {
        aboutMe.style.transition = "all 400ms";
        aboutMeBox.style.width = `${window.innerWidth +
          0.3639702343 * (window.innerHeight / 2)}px`;
        aboutMeBox.style.left = `0px`;
        aboutMe.style.left = `0`;
        home.style.filter = "brightness(50%)";
        backToHome.style.width = `${0.3639702343 *
          (window.innerWidth / 2.5)}px`;
        backToHome.style.left = `-${(0.3639702343 * (window.innerWidth / 2)) /
          2}px`;
      }, 400);
    }
  };
  handleOpenMySkills = e => {
    if (!this.props.mySkills) {
      console.log("myskills is false");
      this.props.setMySkills();
      const mySkills = document.getElementById("my-skills");
      const mySkillsBox = document.querySelector(".about-me-box");
      const buttonCords = document
        .querySelector(".nav-my-skills")
        .firstChild.getBoundingClientRect();
      const home = document.getElementById("home");
      const backToHome = document.querySelector(".backtohome");

      mySkillsBox.style.width = "150px";
      console.log(document.querySelector(".nav-my-skills"));
      mySkillsBox.style.left = `${buttonCords.left +
        0.3639702343 * (window.innerHeight / 2)}px`;
      mySkills.style.left = `-${buttonCords.left}px`;
      mySkillsBox.style.transform = `skew(20deg) translateY(0%)`;
      setTimeout(() => {
        mySkills.style.transition = "all 400ms";
        mySkillsBox.style.width = `${window.innerWidth +
          0.3639702343 * (window.innerHeight / 2)}px`;
        mySkillsBox.style.left = `0px`;
        mySkills.style.left = `0`;
        home.style.filter = "brightness(50%)";
        backToHome.style.width = `${0.3639702343 *
          (window.innerWidth / 2.5)}px`;
        backToHome.style.left = `-${(0.3639702343 * (window.innerWidth / 2)) /
          2}px`;
      }, 400);
    }
  };
  render() {
    return (
      <div className="navigation">
        <div className="nav nav-about-me" onClick={this.handleOpenAboutMe}>
          <div className="parallelogram">
            <div className="parallelogram-bg" />
            <div className="text-bg" />
          </div>
          <div className="text">ABOUT ME</div>
        </div>
        <div className="nav nav-my-skills" onClick={this.handleOpenMySkills}>
          <div className="parallelogram">
            <div className="parallelogram-bg" />
            <div className="text-bg" />
          </div>
          <div className="text">MY SKILLS</div>
        </div>
        <div className="nav nav-projects">
          <div className="parallelogram">
            <div className="parallelogram-bg" />
            <div className="text-bg" />
          </div>
          <div className="text">MY PROJECTS</div>
        </div>
        <div className="nav nav-contact-me">
          <div className="parallelogram last-parallelogram">
            <div className="parallelogram-bg" />
            <div className="text-bg" />
          </div>
          <div className="text">CONTACT ME</div>
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
    setAboutMe: () => {
      dispatch({ type: "SET_ABOUTME" });
    },
    setMySkills: () => {
      dispatch({ type: "SET_MYSKILLS" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
