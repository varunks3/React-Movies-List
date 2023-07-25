import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    profession: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("User signed up successfully!");
  };

  return (
    <div className="m-3">
      <h2>User Signup</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <Form.Label htmlFor="name">User Name:</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <Form.Label htmlFor="password">Password:</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Form.Label htmlFor="email">Email:</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Form.Label htmlFor="phone">Phone:</Form.Label>
          <Form.Control
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <Form.Label htmlFor="profession">Profession:</Form.Label>
          <Dropdown>
            <Dropdown.Toggle
              className="mb-3 "
              variant="dark"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            >
              Select Profession
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item value="developer">Developer</Dropdown.Item>
              <Dropdown.Item value="designer">Designer</Dropdown.Item>
              <Dropdown.Item value="writer">Writer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Button type="submit">Sign Up</Button>
        </div>
        <div>
          Already have an account?{" "}
          <Link to="/login" relative="path">
            Login
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
