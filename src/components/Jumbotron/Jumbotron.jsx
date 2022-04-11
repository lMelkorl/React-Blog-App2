/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Jumbotron.css";
export default function () {
  return (
    <div>
      <div class="jumbotron p-3 p-md-5 text-white rounded homeJumb">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">The Melkor page</h1>
          <p class="lead my-3">
            This site was developed by melkor for inclusion on github page.
            Don't forget to visit https://github.com/lMelkorl, good luck
          </p>
          <p class="lead mb-0">
            <a class="text-white font-weight-bold">Coming soon...</a>
          </p>
        </div>
      </div>
    </div>
  );
}
