import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col } from "react-bootstrap";
import { AuthContext } from '../../../provider/AuthProvider';
import Button from 'react-bootstrap/Button';

const Navigationbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
             <Navbar className='my-4' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-3">
            <Link to='/category/0'>Home</Link>
          <Link to='/about'>about</Link>
          <Link to='/bookednews'>Booked News</Link>
          </Nav>
          <Nav className='d-flex align-items-center'>
          
           {user && 
                <img style={{width: '40px', height: '40px'}} src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user" />
           }

           
           {user ?  <Button variant="dark">Logout</Button> : <Link to='/login'><Button variant="dark">Login</Button></Link>}
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navigationbar;