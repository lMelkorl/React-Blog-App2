/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

              <p className="mb10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p>
                <i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35{" "}
              </p>
              <p>
                <i className="fa fa-phone"></i> +91-9999878398{" "}
              </p>
              <p>
                <i className="fa fa fa-envelope"></i> info@example.com{" "}
              </p>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

              <ul className="footer_ul_amrc">
                <li>
                  <a href="#">Link Title</a>
                </li>
                <li>
                  <a href="#">Link Title</a>
                </li>
                <li>
                  <a href="#">Link Title</a>
                </li>
                <li>
                  <a href="#">Link Title</a>
                </li>
                <li>
                  <a href="#">Link Title</a>
                </li>
                <li>
                  <a href="#">Link Title</a>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

              <ul className="footer_ul2_amrc">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter fleft padding-right"></i>{" "}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <a href="#">https://www.lipsum.com/</a>
                  </p>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter fleft padding-right"></i>{" "}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <a href="#">https://www.lipsum.com/</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <br />

          <p className="text-center">
            Copyright @2022 | Designed With by <a href="#">lMelkorl</a>
          </p>

          <ul className="social_footer_ul">
            <li>
              <a href="https://www.instagram.com/kensriii?utm_medium=copy_link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/lMelkorl">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
