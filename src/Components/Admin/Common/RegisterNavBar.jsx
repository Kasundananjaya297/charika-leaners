import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function RegisterNavBar({ setfiled, setOrder }) {
  //props for set nav bar selections
  const nav = useNavigate();
  const GoToRegisterForm1 = () => {
    nav("/studentprofile/Form1");
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="p-3 bg-white">
          <Form className="d-flex gap-x-3">
            <DropdownButton
              className="flex"
              id="dropdown-basic-button"
              onSelect={(eventKey, event) => {
                if (eventKey === "stdID_ASC" || eventKey === "stdID_DESC") {
                  // Extract the order (ASC/DESC) from the eventKey
                  const order = eventKey.split("_")[1];
                  setfiled("stdID");
                  setOrder(order);
                } else {
                  setfiled(eventKey);
                  setOrder(null); // Assuming there is no specific order for other options
                }
              }}
              title="Filter"
            >
              <Dropdown.Item eventKey="stdID_ASC">A-Z</Dropdown.Item>
              <Dropdown.Item eventKey="stdID_DESC">Z-A</Dropdown.Item>
              <Dropdown.Item eventKey="Registered">Registered</Dropdown.Item>
            </DropdownButton>
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
