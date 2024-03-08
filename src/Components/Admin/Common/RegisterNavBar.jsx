import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export default function RegisterNavBar() {
  const nav = useNavigate();
  const GoToRegisterForm1 = () => {
    nav("/studentprofile/Form1");
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="p-3 bg-white">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Enter Studet Name..."
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div className="flex flex-row space-x-3">
              <Button variant="outline-success" onClick={GoToRegisterForm1}>
                Register
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
