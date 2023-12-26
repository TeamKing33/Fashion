import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Container, Nav, Form, Button } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import './css/Navbars.css';
import Img from './image/icon.png'
const  Navbars = ({size}) => {
  return (
    
    <Navbar expand="lg" className=" navbar navbar-dark ">
      <Container fluid>
        <NavLink to="/home">
        <Navbar.Brand  className='icon' >
        <img
              alt=""
              src={Img}
              width="50"
              height="50"
              className="d-inline-block align-top br-5"
            />
        </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll " className="Toggle"  />
        <Navbar.Collapse id="navbarScroll ">
          <Nav className="mr-auto  mx-auto my-lg-0 " style={{ maxHeight: '100px'}} navbarScroll>
            <NavLink to="/home" className="NavLink"  >Home</NavLink>
            <NavLink to="/product" className="NavLink"  >Product</NavLink>
            <NavLink to="/support" className="NavLink">
              Support
            </NavLink>
            <NavLink to="/signin" className="NavLink">Log out</NavLink>
            <NavLink to="/cartitem"className="NavLink" ><i class="fa-solid fa-cart-shopping"></i> <span className="numbercart">{size}</span></NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default Navbars;
