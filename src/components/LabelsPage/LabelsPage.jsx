import React from "react";
import "./LabelsPage.css";

export default function LabelsPage() {
  return (
    <div>
      <h5 class="card-title">
        Labels &nbsp;<i class="fas fa-search text-primary"></i>
      </h5>
      <div class="form-row">
        <input
          type="text"
          id="filter"
          class="form-control"
          placeholder="Search Label"
        />
      </div>
      <hr />
      <ul class="list-group">
        <li class="list-group-item d-flex mb-3">
          <div className="justify-content-start">
            <i class="fas fa-hashtag text-info"></i> Programming
          </div>
        </li>

        <li class="list-group-item d-flex mb-3">
          <div className="justify-content-start">
            <i class="fas fa-hashtag text-info"></i> Lagnuage
          </div>
        </li>

        <li class="list-group-item d-flex mb-3">
          <div className="justify-content-start">
            <i class="fas fa-hashtag text-info"></i> Bitcoin
          </div>
        </li>

        <li class="list-group-item d-flex mb-3">
          <div className="justify-content-start">
            <i class="fas fa-hashtag text-info"></i> Movie
          </div>
        </li>

        <li class="list-group-item d-flex mb-3">
          <div className="justify-content-start">
            <i class="fas fa-hashtag text-info"></i> Today
          </div>
        </li>

        <li class="list-group-item d-flex mb-3">
          <div className="justify-content-start">
            <i class="fas fa-hashtag text-info"></i> Debugging
          </div>
        </li>
      </ul>
    </div>
  );
}
