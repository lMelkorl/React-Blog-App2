import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <div className="contactPage">
        <div className="contactTitle">
          <h3>
            Contact Us &nbsp; <i class="fas fa-voicemail text-info"></i>
          </h3>
        </div>

        <hr class="featurette-divider" />

        <div className="contactBoxes row">
          <div className="contactBox col-6 col-md-4 text-center">
            <h2 className="contactIcon">
              <i class="fas fa-map-marked text-primary"></i>
            </h2>
            <h5>Our Main Office</h5>
            <br />
            <p className="contactText text-secondary">
              Turkey,A-D,728 Coder st. DB 2110
            </p>
          </div>

          <div className="contactBox col-6 col-md-4 text-center">
            <h2 className="contactIcon">
              <i class="fas fa-phone text-primary"></i>
            </h2>
            <h5>Phone Number</h5>
            <br />
            <p className="contactText text-secondary">
              +90 534 xxx xx xx (For just Phone Contacts)
            </p>
          </div>

          <div className="contactBox col-6 col-md-4 text-center">
            <h2 className="contactIcon">
              <i class="fas fa-envelope text-primary"></i>
            </h2>
            <h5>Email</h5>
            <br />
            <p className="contactText text-secondary">
              lmelkorl@gmail.com (only mail contacts)
            </p>
          </div>

          <div className="contactBox  col-6 col-md-3 text-center">
            <h2 className="contactIcon">
              <i class="fas fa-fax text-primary"></i>
            </h2>
            <h5>Fax</h5>
            <br />
            <p className="contactText text-secondary">1-234-65732-34</p>
          </div>
        </div>
      </div>
    </>
  );
}
