import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
           <Container>
             <NavLink className="nav-brand" to="/">Hero Rider</NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavLink className="nav-item" to="/home"> Home</NavLink>
                <NavLink className="nav-item" to="/service"> Service</NavLink>
                <NavLink className="nav-item" to="/about"> About Us</NavLink>
                <NavLink className="nav-item" to="/contact">Contact</NavLink>
                  
               </Nav>
        <Nav>
          {/* <Nav.Link className='nav-item' to="/login"><Button type='button'> Login</Button></Nav.Link> */}
       <Button type='button'><Link className='button-link' to ="/login">Login</Link></Button>
       <Button type='button'><Link className='button-link' to ="/register">Register</Link></Button>
         {/* <Nav.Link eventKey={2} href="#memes">
                 Dank memes
           </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;