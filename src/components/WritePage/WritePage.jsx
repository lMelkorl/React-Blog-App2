import React, { useState } from "react";
import "./WritePage.css";
import editIcon from "../icons/edit.png";
import RichTextEditor from "./RichTextEditor";

export default function WritePage() {
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };

  const download = (filename, docs) => {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/html;charset=UTF-8, " +
        encodeURIComponent(docs.documentElement.outerHTML)
    );
    element.setAttribute("download", filename);
    document.body.appendChild(element);
    element.click();
  };

  const getHtml = () => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(value, "text/html");
    download("usename", doc);
  };

  return (
    <div>
      <div class="card">
        <h5 class="card-header">
          Write &nbsp;
          <img className="editIcon" src={editIcon} alt="" />
        </h5>
        <div class="card-body">
          <h6>
            Title <small className="text-danger">*</small>
          </h6>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="btn btn-secondary">
                <i class="fas fa-comment-dots"></i>
              </div>
            </div>
            <input type="text" class="form-control" placeholder="" required />
          </div>
          <p className="text-secondary">
            <small>
              Please choose an appropriate title so that it can be answered
              easily.
            </small>
          </p>

          <h6>
            Category <small className="text-danger">*</small>
          </h6>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="btn btn-secondary">
                <i class="fas fa-comment-dots"></i>
              </div>
            </div>
            <input type="text" class="form-control" placeholder="" required />
          </div>
          <p className="text-secondary">
            <small>
              Please select the appropriate section so that the topic can be
              easily searched.
            </small>
          </p>

          <h6>
            Explanation <small className="text-danger">*</small>
          </h6>
          <div class="input-group">
            <div class="input-group-prepend">
              <button class="btn btn-secondary ">
                <i class="fas fa-folder-open"></i>
              </button>
            </div>
            <select class="form-control" required>
              <option></option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
          </div>
          <p className="text-secondary">
            <small>Please write a short description of the subject.</small>
          </p>

          <h6>Labels</h6>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="btn btn-secondary">
                <i class="fas fa-tags"></i>
              </div>
            </div>
            <input type="text" class="form-control" placeholder="" />
          </div>
          <p className="text-secondary">
            <small>Please choose appropriate keywords.</small>
          </p>

          <h6>Cover Photo</h6>
          <div class="input-group">
            <div class="input-group-prepend">
              <label className="bg-info rounded">
                <input type="file" />
                <i class="far fa-image"></i> &nbsp; Select File
              </label>
            </div>
          </div>

          <div className="contentBox">
            <RichTextEditor getValue={getValue} />
          </div>

          <br />
          <button onClick={() => getHtml()} className="btn btn-secondary">
            Show
          </button>
        </div>
      </div>
      <br />
      {/* <div dangerouslySetInnerHTML={{__html: value}}></div> */}
    </div>
  );
}
