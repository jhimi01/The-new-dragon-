import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
// import {Button, Container} from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
    return (
        <Container>
       <div className="text-center">
       <img src={logo} alt="" />
        <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
       </div>
       <div style={{background: '#F3F3F3'}}  className='d-flex py-2' bg="light">
       <Button variant="danger">Latest</Button>
       <Marquee className='text-danger' speed={50}>
  I can be a React component, multiple React components, or just some text....
  I can be a React component, multiple React components, or just some text.
</Marquee>
       </div>
       <Navbar className='my-4' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav className='d-flex'>
            <Nav.Link href="#deets">
                <img style={{width: '40px', height: '40px'}} src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="dark">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;