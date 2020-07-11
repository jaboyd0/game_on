import React, { useRef, useState } from "react";
import axios from "axios";
import "../styles/SignUp.css";
function SigningUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const passwordRef = useRef();  

  const [redirect, setRedirect] = useState(false);
  function submitButtonOnClicHandler(event) {
    event.preventDefault();

    axios({
      url: "/api/users",
      method: "post",
      data: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        city:  cityRef.current.value,
        password: passwordRef.current.value
      }
    }).then(res => {
      setRedirect(true);
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }  
  return (
    <div className="wrapper">
      {redirect ? <Redirect to={} />: ""}
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form noValidate>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              ref={nameRef}
              type="text"
              className=""
              placeholder="Please type your name"
              name="Firstname"
              noValidate
            />
          </div>
          <div className="city">
            <label htmlFor="city">City</label>
            <input
              ref={cityRef}  
              type="text"
              className=""
              placeholder="Please select the city"
              name="city"
              noValidate
            />
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
              <button onClick={submitButtonOnClicHandler} type="submit">createAccount</button>
              <small>Already have an account?</small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SigningUp;