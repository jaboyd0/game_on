import React, { useRef } from "react";
import axios from "axios";
import "../styles/SignUp.css";
import { Link } from "react-router-dom";

function SignIn() {
  
  
  const emailRef = useRef();
  const passwordRef = useRef();


 function loggingInHandler(event) {
  event.preventDefault();

 
axios({
  url: "/api/users/signin",
  method: "post",
  data: {
    email: emailRef.current.value,
    password: passwordRef.current.value,
   },
  })
    .then((res) => {
      console.log(res);
      const responsing = res.data.message;
      alert(responsing);
      
    })
      .then((res) => {
        emailRef.current.value = "";
        passwordRef.current.value = "";
      })
        .catch((err) => {
          console.log(err);
        });
 }

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Welcome Back</h1>
        <form noValidate>
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
              <button onClick={loggingInHandler} type="submit">Log in</button><br></br>
              <Link to="/SignUp">
                <small className="btn btn-secondary" id= "reddish">Need to Sign Up?</small>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>);

}

export default SignIn;
