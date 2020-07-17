import React, { useRef, useState } from "react";
import axios from "axios";
import "../styles/SignUp.css";
import { Link, Redirect } from "react-router-dom";
function SigningUp() {
  const [signed, setSignup] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [city, setCity] = useState("");
  function submitButtonOnClicHandler(event) {
    event.preventDefault();
    axios({
      url: "/api/users",
      method: "post",
      data: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        city: city,
        password: passwordRef.current.value,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setSignup(true);
        }
      })
      .then((res) => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        setCity("");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleSelectOnChange(event) {
    let { name, value } = event.target;
    setCity(value);
  }
  if (!signed) {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form noValidate>
            <div className="firstName">
              <label htmlFor="firstName">Name</label>
              <input
                ref={nameRef}
                type="text"
                className=""
                placeholder="Name"
                name="name"
                noValidate
              />
            </div>
            <br></br>
            <div className="lastName">
              <select onChange={handleSelectOnChange}>
                <option></option>
                <option>Fairfax</option>
                <option>Arlington</option>
                <option>Falls Church</option>
                <option>Tyson Corner</option>
              </select>
              <p> Please select a city</p>
            </div>
            <div className="Email">
              <label htmlFor="Email">Email</label>
              <input
                ref={emailRef}
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
                ref={passwordRef}
                type="text"
                className=""
                placeholder="Password"
                name="Password"
                noValidate
              />
            </div>
            <div>
              <div className="createAccount">
                <button onClick={submitButtonOnClicHandler} type="button">
                  Create Account
              </button><br></br>
                <Link to="/SignIn">
                  <small className="btn btn-secondary" id="reddish">Already have an account?</small>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>);
  } else {
    // redirect to signin page if signed up
    return <Redirect to={{ pathname: "/SignIn" }} />;
  }
}
export default SigningUp;