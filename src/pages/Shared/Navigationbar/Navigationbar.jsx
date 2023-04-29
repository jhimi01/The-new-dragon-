import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col } from "react-bootstrap";
import { AuthContext } from '../../../provider/AuthProvider';
import Button from 'react-bootstrap/Button';
import { FaUserCircle } from 'react-icons/fa';

const Navigationbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                           <Link to='/category/0'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">{user.dispayname}</Nav.Link> */}
                           {user && <FaUserCircle style={{fontSize: '2rem'}}/>}
                           
                               {user ? <Button variant="secondary">Logout</Button> : <Link to='/login'><Button variant="secondary">Login</Button></Link>}
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Navigationbar;