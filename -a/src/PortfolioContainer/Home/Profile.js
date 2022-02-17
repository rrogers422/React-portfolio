import React from "react";
import Typical from 'react-typical';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="#">
              <i className="fa fa-facebook-square"> </i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"> </i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"> </i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"> </i>
            </a>
          </div>

          <div className="profile-details-name">
              <span className="primary-text">
                  {" "}
                  Hello, I'm <span className="highlighted-text">Reagan</span>
              </span>
              </div>
              <div className="profile-datails-role">
                  <span className="primary-text">
                      {" "}
                      <h1>
                        <Typical/>
                        loop={Infinity}
                        steps{[
                            "Enthusiastic Dev😜",
                            1000,
                            "Full Stack Developer💻",
                            1000,
                            "React Dev📱",
                            1000,
                            "Mother👩🏽‍🍼",
                            1000,
                        ]}
                      </h1>
                      <span className="profile-role-tagline">
                          
                      </span>
                  </span>
          </div>
        </div>
      </div>
    </div>
  );
}
