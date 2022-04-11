import React from "react";
import "./SinglePost.css";
import Default from "../../images/default.png";
export default function SinglePost() {
  return (
    <div>
      <div class="jumbotron">
        <div className="title-photo">
          <img className="userQImg qimage" src={Default} alt="" />
          <h1 class="display-4">&nbsp; Title</h1>
        </div>
        <div className="cDs">
          <div>
            <p>
              <small>
                <span className="badge badge-pill bg-warning">Category</span>
              </small>
            </p>
          </div>
          <div>
            <p>
              <small className="text-smallDate">March 2 2021</small>
            </p>
          </div>
        </div>
        <p class="pt-0 p-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          labore atque ut consequuntur dolorem, hic, aut pariatur nulla quae
          molestiae rerum inventore qui aliquam voluptatum debitis beatae earum
          quibusdam voluptates totam doloribus animi sequi. Aut at, sequi
          repellat eos perferendis sed expedita animi numquam, ipsa nostrum
          accusantium nobis quibusdam nisi cumque minus excepturi necessitatibus
          nam tenetur doloremque vel fugit. Eveniet totam dolores et sit
          corrupti maiores, obcaecati doloremque! Dolores cupiditate nam officia
          perspiciatis excepturi aliquam aperiam quo mollitia optio libero
          voluptatum, autem, eaque rem voluptate? Officia sequi velit veniam
          facilis consectetur maiores fugiat alias ex exercitationem aliquam
          placeat est, eius id, dolorum doloribus sit error assumenda. Hic at,
          excepturi minus obcaecati sapiente recusandae magni error earum
          asperiores fuga cumque dolor, quae laboriosam? Beatae odit facilis in
          molestias consequatur temporibus labore asperiores suscipit, adipisci
          fugiat veritatis ab distinctio architecto consequuntur laboriosam
          reiciendis molestiae quasi iusto quaerat quam sed. Tempore animi
          labore minus beatae! Incidunt, dignissimos illum! Qui culpa molestiae
          quisquam? Repellat tempore nemo corrupti qui esse ut cum dolores
          debitis adipisci, voluptates unde assumenda, accusantium velit? Ad
          sequi laboriosam repellendus ex vero sint laudantium illum magni.
          Molestias, ab? Magnam voluptatum accusantium modi facere iste ab
          tempora alias ea, quis nam vitae.
        </p>
        <hr class="my-4" />
        <p class="p-2">
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>

        <div className="qL-qC">
          <button className="btn btn-sm light">
            <i className="fas fa-thumbs-up text-primary"></i> 2
          </button>
          &nbsp;
          <button className="btn btn-sm light">
            <i className="fas fa-comment text-secondary"></i> 4
          </button>
        </div>
      </div>
      <br />

      <h4>
        Replies &nbsp;
        <i class="fas fa-reply text-info"></i>
      </h4>
      <br />
      <div className="container">
        <div class="card">
          <div class="card-header d-flex flex-direction-row justify-content-between">
            <h5 class="mt-2">lmelkorl</h5>
            <img className="userAImg qimage" src={Default} alt="" />
          </div>
          <div class="card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-header d-flex flex-direction-row justify-content-between">
            <h5 class="mt-2">lmelkorl</h5>
            <img className="userAImg qimage" src={Default} alt="" />
          </div>
          <div class="card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
