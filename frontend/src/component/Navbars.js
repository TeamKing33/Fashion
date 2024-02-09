import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Container, Nav, Form, Button } from 'react-bootstrap';
import {NavLink,useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import './css/Navbars.css';
import Img from './image/icon.png'
const  Navbars = ({size}) => {
  const [login, setLogin] = useState(false);
  const [filter ,setFilter] = useState('');
  const navigator = useNavigate ()
  const change = (event) =>{
    setFilter(event.target.value);
  } 

  const handleClick = (e) =>{
    e.preventDefault();
    const lowercase = filter.toLowerCase();
    if(lowercase  === "product"){
      navigator("/product");
    }
    else if(lowercase  === "home"){
      navigator("/home");
    }
    else if(lowercase  === "support"){
      navigator("/support");
    }
    else if(lowercase  === "add to cart"){
      navigator("/cartitem");
    }
    else if(lowercase  === "men"){
      navigator("/productMen");
    }
    else if(lowercase  === "women"){
      navigator("/productWomen");
    }
    else if(lowercase  === "kids"){
      navigator("/productKids");
    }
    else{
      navigator('*')
    }
    
  }

  const handleRemove = () =>{
    Cookies.remove("login");
    setLogin(false);
    navigator("/Signin")
    window.location.reload()
  }

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
            <NavLink  className="NavLink" onClick={handleRemove}>Log out</NavLink>
            <NavLink to="/cartitem"className="NavLink" ><i class="fa-solid fa-cart-shopping"></i> <span className="numbercart">{size}</span></NavLink>
          </Nav>
          <Form className="d-flex" onSubmit={handleClick}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search"
              aria-label="Search"
              onChange={change}
            />
            <Button variant="outline-light" type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default Navbars;
