/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./AboutPage.css";
import kensriii from "../../images/kensriii.JPG";
export default function AboutPage() {
  return (
    <div className="about container">
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            About <span class="text-muted">Us ?</span>
          </h2>
          <p class="lead">
            The ring, lost for centuries, is found, and by a strange twist of
            fate, it falls into the hands of Frodon, a small Hobbit. Old Gandalf
            realizes that this is the special ring belonging to the Dark Lord
            Sauron. What Frodo must do is plunge into the realm of the Cracks of
            the Apocalypse to engage in an epic struggle and destroy this ring
            forever.
          </p>
        </div>
        <div class="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto aboutImg"
            src="https://wallpaperaccess.com/full/1287686.jpg"
            focusable="false"
            role="img"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            About-2 <span class="text-muted"> Us-2 ?</span>
          </h2>
          <p class="lead">
            Two Towers, the second film in the Lord of the Rings franchise, 2002
            Released in 2017, it is a movie that turned the box office records
            of the period upside down. it is production. New races forgotten in
            middle earth in the movie brotherhood It is about breaking down and
            everyone going their way. the ring of the ring They must take him to
            the center of evil. in Frodo and sam they will accompany him and
            they will meet with saruhan on the way. to finish A wonderful film
            about the journeys of people who do not know is with you.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto aboutImg"
            src="https://yazilimcigenclik.com.tr/wp-content/uploads/2021/03/pexels-christina-morillo-1181244-850x567.jpg"
            focusable="false"
            role="img"
          ></img>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row developerProfile">
        <div class="col-lg-4 developerProfileContent">
          <img
            class="rounded-circle"
            src={kensriii}
            alt=""
            width="140"
            height="140"
          />
          <h2>lMelkorl</h2>
          <p>
            Hi,I'm Melkor,I developed this site as frontend and backend. Don't
            forget to follow for more projects and codes. See you 👋
          </p>
          <p>
            <a
              class="btn btn-secondary"
              href="https://www.instagram.com/kensriii?utm_medium=copy_link"
              role="button"
            >
              View details »
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
