/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./LastPosts.css";
import Default from "../../images/default.png";

export default function LastPost() {
  return (
    <div>
      <div className="card lastPosts">
        <div className="card-body">
          <h6 className="card-title">
            <i className="fab fa-readme text-info"></i> Last Posts
          </h6>
          <div className="postList">
            {/* start */}
            <a href="">
              <img className="userLastPostImg" src={Default} alt="" />
              <a href="" className="smPostTitle">
                Title
              </a>
            </a>
            <hr className="featurette-divider" />
            {/*  end */}

            <a href="">
              <img className="userLastPostImg" src={Default} alt="" />
              <a href="" className="smPostTitle">
                Title
              </a>
            </a>
            <hr className="featurette-divider" />

            <a href="">
              <img className="userLastPostImg" src={Default} alt="" />
              <a href="" className="smPostTitle">
                Title
              </a>
            </a>
            <hr className="featurette-divider" />

            <a href="">
              <img className="userLastPostImg" src={Default} alt="" />
              <a href="" className="smPostTitle">
                Title
              </a>
            </a>
            <hr className="featurette-divider" />

            <a href="">
              <img className="userLastPostImg" src={Default} alt="" />
              <a href="" className="smPostTitle">
                Title
              </a>
            </a>
            <hr className="featurette-divider" />

            <a href="">
              <img className="userLastPostImg" src={Default} alt="" />
              <a href="" className="smPostTitle">
                Title
              </a>
            </a>
            <hr className="featurette-divider" />
          </div>
        </div>
      </div>
    </div>
  );
}
