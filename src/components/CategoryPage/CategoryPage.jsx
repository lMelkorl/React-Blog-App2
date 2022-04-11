import React from "react";
import "./CategoryPage.css";

export default function Category() {
  return (
      <div className="row justify-content-center catList">
        <h3 className="text-center">
          Categories &nbsp;
        <i class="fas fa-landmark" style={{color:'rgb(0, 214, 126)'}}></i>
        </h3>
        <hr className="featurette-divider"/>
      <div className="bg-cat mx-auto" style={{maxWidth: '18rem'}}>
        <a href="#">Music</a>
        <hr className="featurette-divider m-0"/>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div className="bg-cat mx-auto" style={{maxWidth: '18rem'}}>
        <a href="#">Music</a>
        <hr className="featurette-divider m-0"/>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div className="bg-cat mx-auto" style={{maxWidth: '18rem'}}>
        <a href="#">Music</a>
        <hr className="featurette-divider m-0"/>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div className="bg-cat mx-auto" style={{maxWidth: '18rem'}}>
        <a href="#">Music</a>
        <hr className="featurette-divider m-0"/>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      </div>
  );
}
