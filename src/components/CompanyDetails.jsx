import React from "react";
import { Card } from "react-bootstrap";
import NavBar from "./NavBar";

function CompanyDetails() {
  return (
    <div>
        <NavBar/>
      <Card style={{ width: '28rem', margin: "auto", marginTop: "0.9rem" , padding: "0.2rem"}}>
        <Card.Text>
          <b>Company Name:</b> Geeksynergy Technologies Pvt Ltd
        </Card.Text>
        <Card.Text>
          <b>Language:</b> Sanjayanagar, Bengaluru-56
        </Card.Text>
        <Card.Text>
          <b>Phone::</b> XXXXXXXXX09
        </Card.Text>
        <Card.Text>
          <b>Email:</b>XXXXXX@gmail.com
        </Card.Text>
      </Card>
    </div>
  );
}

export default CompanyDetails;
