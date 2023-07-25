import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login () {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const registeredUser = JSON.parse(localStorage.getItem("user"));

    if (
      registeredUser &&
      registeredUser.name === formData.name &&
      registeredUser.password === formData.password
    ) {
      navigate("/movie");
    } else {
      setErrorMessage("Invalid Credentials");
    }
  };
 
  return (
    <div className= "m-3">
      <h2>Login</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <Form onSubmit={handleLogin}>
        <div>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label htmlFor="name">User Name:</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          </Form.Group>
        </div>
        <div>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label htmlFor="password">Password:</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          </Form.Group>
          
        </div>
        <Button className= "my-3" type="submit">Login</Button>
        <div>
          New user?{" "}
          <Link to="/" relative="path">
            Sign Up
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
