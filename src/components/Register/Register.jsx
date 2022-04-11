import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div class="register">
      <div class="form">
        <form class="register-form">
          <span class="material-icons">Register</span>
          <input type="text" placeholder="email" required />
          <input type="password" placeholder="password" required />
          <button>register</button>
        </form>
        <br />
        <small className="form-text text-muted">
          Already have an account?
          <a href="/login" className="registerInfo form-text text-info">
            {" "}
            Log in
          </a>
        </small>
      </div>
    </div>
  );
}
