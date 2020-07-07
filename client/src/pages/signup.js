import React, { Component } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, Cardheader, CardBody } from "../components/card";
import Button from "../components/button";
import { Row, Col } from "../components/grid";
import { Link, useHistory } from "react-router-dom"; // click link if you have href

const SignupForm = () => {
  const [message, setMessage] = React.useState();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      //
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      setMessage({ message: "Sign up successful" }); // set message for authenication
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? ( //checking if it is correct
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="password">Email Address</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

class SignUp extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <Row>
            <Col>
              <Link to="/users/signup">
                <Button>
                  <h3>Sign Up</h3>
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/signin">
                <Button>
                  <h3>Already a member? Sign in</h3>
                </Button>
              </Link>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default SignUp;
