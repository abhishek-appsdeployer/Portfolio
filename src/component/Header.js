import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
  return (
    <Navbar className='text-light' fixed='top' collapseOnSelect expand="lg" style={{backgroundColor: 'navy'}}  variant="">
    <Container className='text-light '>
      <Navbar.Brand href="#home" className='text-light brand'>Developer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className=' bg-success' />
      <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="/">
      <Nav.Link className='text-light'>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/introduce">
      <Nav.Link className='text-light'>About</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
      <Nav.Link className='text-light'>Contact</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/skill">
      <Nav.Link className='text-light'>Skill</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/cer">
      <Nav.Link className='text-light'>Certification</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/resume">
      <Nav.Link className='text-light'>Resume</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header