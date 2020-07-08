import React from "react";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form noValidate>
          <div className="firstName">
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              className=""
              placeholder="FirstName"
              name="Firstname"
              noValidate
            />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              className=""
              placeholder="lastName"
              name="lastName"
              noValidate
            />
          </div>
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
              <button type="submit">createAccount</button>
              <small>Already have an account?</small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
