import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <div class="login">
        <div class="form">
          <form class="login-form">
            <span class="material-icons">Login</span>
            <input type="text" placeholder="email" required />
            <input type="password" placeholder="password" required />
            <button>login</button>
          </form>
          <br />
          <small className="form-text text-muted">
            Don't have an account ?{" "}
            <a href="/register" className="registerInfo form-text text-info">
              {" "}
              Register
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
