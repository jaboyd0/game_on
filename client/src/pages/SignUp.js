import React, { useRef, useState } from "react";
import axios from "axios";
import "../styles/SignUp.css";
function SigningUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();  

  const [redirect, setRedirect] = useState(false);
  const [city, setCity] = useState("");

  function submitButtonOnClicHandler(event) {
    event.preventDefault();

    axios({
      url: "/api/users",
      method: "post",
      data: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        city:  city,
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


  function handleSelectOnChange(event) {
    let {name, value} = event.target;
    setCity(value);
  }



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
              placeholder="Please type your name"
              name="name"
              noValidate
            />
          </div>

          <div className="lastName">
            <select onChange={handleSelectOnChange}>
              <option>Fairfax</option>
              <option>Arlington</option>
              <option>Falls Church</option>
              <option>Tyson Corner</option>
            </select>                                                 
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