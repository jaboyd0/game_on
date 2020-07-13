import React from "react";
import "../styles/SignUp.css";

function SignIn() {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Welcome Back</h1>
        <form noValidate>
          <div className="Email">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              className=""
              placeholder="Email"
              name="Email"
              noValidate
            />
          </div>
          <div className="Password">
            <label htmlFor="Password">Password</label>
            <input
              type="text"
              className=""
              placeholder="Password"
              name="Password"
              noValidate
            />
          </div>
          <div>
            <div className="createAccount">
              <button type="submit">Log in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
